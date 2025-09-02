
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

    // Enhanced geolocation options for better mobile detection
    const options = {
      enableHighAccuracy: true,
      timeout: 20000, // Increased timeout for mobile
      maximumAge: 60000 // Cache for 1 minute
    };

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log('Detected coordinates:', { latitude, longitude });
          
          // Try multiple geocoding services for better accuracy
          let locationData = null;
          
          // Primary service: BigDataCloud
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            
            if (response.ok) {
              locationData = await response.json();
              console.log('BigDataCloud response:', locationData);
            }
          } catch (error) {
            console.error('BigDataCloud API failed:', error);
          }

          // Fallback service: OpenStreetMap Nominatim
          if (!locationData) {
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
              );
              
              if (response.ok) {
                const osmData = await response.json();
                console.log('OpenStreetMap response:', osmData);
                
                locationData = {
                  principalSubdivision: osmData.address?.state || osmData.address?.region,
                  city: osmData.address?.city || osmData.address?.town || osmData.address?.village,
                  locality: osmData.address?.suburb || osmData.address?.neighbourhood || osmData.address?.hamlet,
                  countryName: osmData.address?.country
                };
              }
            } catch (error) {
              console.error('OpenStreetMap API failed:', error);
            }
          }
          
          if (locationData) {
            // Enhanced state and city extraction
            let detectedState = locationData.principalSubdivision || locationData.principalSubdivisionCode || "";
            let detectedCity = locationData.city || locationData.locality || locationData.localityInfo?.administrative?.[2]?.name || "";
            
            // Clean up and match state name
            if (detectedState) {
              // Remove common suffixes and clean the state name
              detectedState = detectedState.replace(/\s+(state|province)$/i, '').trim();
              
              const stateMatch = indianStates.find(state => {
                const stateLower = state.toLowerCase();
                const detectedLower = detectedState.toLowerCase();
                
                return stateLower === detectedLower ||
                       stateLower.includes(detectedLower) ||
                       detectedLower.includes(stateLower) ||
                       // Handle common variations
                       (stateLower === 'delhi' && detectedLower.includes('delhi')) ||
                       (stateLower === 'telangana' && (detectedLower.includes('telangana') || detectedLower.includes('hyderabad'))) ||
                       (stateLower === 'karnataka' && (detectedLower.includes('karnataka') || detectedLower.includes('bangalore'))) ||
                       (stateLower === 'tamil nadu' && detectedLower.includes('tamil'));
              });
              
              if (stateMatch) {
                detectedState = stateMatch;
              }
            }
            
            // Clean up city name
            if (detectedCity) {
              detectedCity = detectedCity.replace(/\s+(city|district|municipal|corporation)$/i, '').trim();
            }
            
            const detectedLocation: LocationData = {
              state: detectedState,
              city: detectedCity,
              address: locationData.locality ? 
                `${locationData.locality}, ${detectedCity}, ${detectedState}` : 
                `${detectedCity}, ${detectedState}`
            };
            
            setLocation(detectedLocation);
            onLocationChange(detectedLocation);
            
            toast({
              title: "📍 Location detected!",
              description: `${detectedCity || 'City'}, ${detectedState || 'State'}`,
            });
          } else {
            throw new Error("No location data received");
          }
        } catch (error) {
          console.error("Error getting location details:", error);
          
          // Fallback to coordinates
          const coordLocation: LocationData = {
            state: "",
            city: "",
            address: `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`
          };
          setLocation(coordLocation);
          onLocationChange(coordLocation);
          
          toast({
            title: "📍 Location detected (coordinates)",
            description: "Please manually select your state and city",
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
          errorMessage = "📍 Location access denied. Please enable location permissions";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMessage = "📍 Location unavailable. Please enter manually";
        } else if (error.code === error.TIMEOUT) {
          errorMessage = "📍 Location request timed out. Please try again";
        }
        
        toast({
          title: "Location detection failed",
          description: errorMessage,
          variant: "destructive"
        });
      },
      options
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
      className="space-y-3 sm:space-y-4"
    >
      {/* Mobile-optimized header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg flex-shrink-0">
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
              📍 Location Details
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
              Help us find providers near you
            </p>
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={detectLocation}
            disabled={isDetecting}
            className="w-full sm:w-auto text-xs sm:text-sm border-blue-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-8 sm:h-10"
          >
            {isDetecting ? (
              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin text-blue-600" />
            ) : (
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-600" />
            )}
            {isDetecting ? "Detecting..." : "Auto-Detect"}
          </Button>
        </motion.div>
      </div>

      {/* Mobile-optimized form fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="state" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
            State *
          </Label>
          <Select value={location.state} onValueChange={(value) => handleLocationChange("state", value)}>
            <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-400 transition-colors text-sm">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent className="max-h-48 sm:max-h-60 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              {indianStates.map((state) => (
                <SelectItem 
                  key={state} 
                  value={state}
                  className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:bg-blue-100 dark:focus:bg-blue-900/50 text-sm"
                >
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="city" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
            City *
          </Label>
          <Input
            id="city"
            value={location.city}
            onChange={(e) => handleLocationChange("city", e.target.value)}
            placeholder="Enter your city"
            className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-400 transition-colors text-sm"
          />
        </div>
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <Label htmlFor="address" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
          Complete Address *
        </Label>
        <Input
          id="address"
          value={location.address}
          onChange={(e) => handleLocationChange("address", e.target.value)}
          placeholder="Enter your complete address (e.g., Dilsukhnagar, Hyderabad)"
          className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-400 transition-colors text-sm"
        />
      </div>
    </motion.div>
  );
};
