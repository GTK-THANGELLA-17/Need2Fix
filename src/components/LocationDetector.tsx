
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
  "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep"
];

export interface LocationData {
  state: string;
  city: string;
  address: string;
}

export interface LocationDetectorProps {
  onLocationChange: (location: LocationData) => void;
  initialLocation?: LocationData;
}

export const LocationDetector = ({ onLocationChange, initialLocation }: LocationDetectorProps) => {
  const [location, setLocation] = useState<LocationData>(
    initialLocation || { state: "", city: "", address: "" }
  );
  const [isDetecting, setIsDetecting] = useState(false);
  const { toast } = useToast();

  const detectLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support geolocation",
        variant: "destructive"
      });
      return;
    }

    setIsDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Using a more reliable geocoding service
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          
          if (response.ok) {
            const data = await response.json();
            console.log("Geocoding response:", data);
            
            // More accurate state and city extraction
            let detectedState = data.principalSubdivision || data.principalSubdivisionCode || "";
            let detectedCity = data.city || data.locality || data.localityInfo?.administrative?.[2]?.name || "";
            
            // Clean up state name to match our list
            if (detectedState) {
              const stateMatch = indianStates.find(state => 
                state.toLowerCase().includes(detectedState.toLowerCase()) ||
                detectedState.toLowerCase().includes(state.toLowerCase())
              );
              if (stateMatch) {
                detectedState = stateMatch;
              }
            }
            
            const detectedLocation: LocationData = {
              state: detectedState,
              city: detectedCity,
              address: data.locality ? `${data.locality}, ${detectedCity}, ${detectedState}` : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
            };
            
            setLocation(detectedLocation);
            onLocationChange(detectedLocation);
            
            toast({
              title: "Location detected successfully!",
              description: `${detectedCity || 'City'}, ${detectedState || 'State'}`,
            });
          } else {
            throw new Error("Failed to get location details");
          }
        } catch (error) {
          console.error("Error getting location details:", error);
          
          // Fallback to coordinates
          const coordLocation: LocationData = {
            state: "",
            city: "",
            address: `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`
          };
          setLocation(coordLocation);
          onLocationChange(coordLocation);
          
          toast({
            title: "Location detected (coordinates)",
            description: "Please manually select your state and city for better accuracy",
            variant: "default"
          });
        } finally {
          setIsDetecting(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setIsDetecting(false);
        
        let errorMessage = "Please enable location access or enter manually";
        if (error.code === error.PERMISSION_DENIED) {
          errorMessage = "Location access denied. Please enable location permissions and try again";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMessage = "Location information unavailable. Please enter manually";
        } else if (error.code === error.TIMEOUT) {
          errorMessage = "Location request timed out. Please try again";
        }
        
        toast({
          title: "Location detection failed",
          description: errorMessage,
          variant: "destructive"
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000
      }
    );
  };

  const handleLocationChange = (field: keyof LocationData, value: string) => {
    const newLocation = { ...location, [field]: value };
    setLocation(newLocation);
    onLocationChange(newLocation);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Location Details
        </h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={detectLocation}
            disabled={isDetecting}
            className="text-sm font-medium border-blue-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            {isDetecting ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin text-blue-600" />
            ) : (
              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            )}
            {isDetecting ? "Detecting..." : "Auto-Detect Location"}
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="state" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            State *
          </Label>
          <Select value={location.state} onValueChange={(value) => handleLocationChange("state", value)}>
            <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-400 transition-colors">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent className="max-h-60 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              {indianStates.map((state) => (
                <SelectItem 
                  key={state} 
                  value={state}
                  className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:bg-blue-100 dark:focus:bg-blue-900/50"
                >
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            City *
          </Label>
          <Input
            id="city"
            value={location.city}
            onChange={(e) => handleLocationChange("city", e.target.value)}
            placeholder="Enter your city"
            className="h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-400 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Complete Address *
        </Label>
        <Input
          id="address"
          value={location.address}
          onChange={(e) => handleLocationChange("address", e.target.value)}
          placeholder="Enter your complete address"
          className="h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-400 transition-colors"
        />
      </div>
    </motion.div>
  );
};
