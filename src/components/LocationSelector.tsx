
import React, { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LocationSelectorProps {
  onLocationChange: (location: { state: string; city: string; address: string }) => void;
}

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
  "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep"
];

export const LocationSelector: React.FC<LocationSelectorProps> = ({ onLocationChange }) => {
  const [location, setLocation] = useState({ state: '', city: '', address: '' });
  const [isDetecting, setIsDetecting] = useState(false);

  const detectLocation = () => {
    setIsDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            
            if (response.ok) {
              const data = await response.json();
              let detectedState = data.principalSubdivision || "";
              let detectedCity = data.city || data.locality || "";
              
              const stateMatch = indianStates.find(state => 
                state.toLowerCase().includes(detectedState.toLowerCase()) ||
                detectedState.toLowerCase().includes(state.toLowerCase())
              );
              if (stateMatch) {
                detectedState = stateMatch;
              }
              
              const newLocation = {
                state: detectedState,
                city: detectedCity,
                address: data.locality ? `${data.locality}, ${detectedCity}, ${detectedState}` : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
              };
              
              setLocation(newLocation);
              onLocationChange(newLocation);
            }
          } catch (error) {
            console.error('Location detection failed:', error);
          }
          setIsDetecting(false);
        },
        (error) => {
          console.error('Location detection failed:', error);
          setIsDetecting(false);
          alert('Location detection failed. Please enter manually.');
        }
      );
    } else {
      setIsDetecting(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleLocationChange = (field: string, value: string) => {
    const newLocation = { ...location, [field]: value };
    setLocation(newLocation);
    onLocationChange(newLocation);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-3 sm:p-4 space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-lg">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-medium text-blue-800 dark:text-blue-200">
              Select Your Location
            </h4>
            <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300">
              Help us find service providers near you
            </p>
          </div>
        </div>
        
        <Button
          type="button"
          onClick={detectLocation}
          disabled={isDetecting}
          variant="outline"
          size="sm"
          className="w-full sm:w-auto text-xs sm:text-sm border-blue-200 hover:border-blue-400 whitespace-nowrap"
        >
          {isDetecting ? (
            <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" />
          ) : (
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          )}
          {isDetecting ? 'Detecting...' : 'Auto-Detect'}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Select value={location.state} onValueChange={(value) => handleLocationChange('state', value)}>
          <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 max-h-60 z-[90]">
            {indianStates.map((state) => (
              <SelectItem 
                key={state} 
                value={state}
                className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer"
              >
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Input
          placeholder="Enter City"
          value={location.city}
          onChange={(e) => handleLocationChange('city', e.target.value)}
          className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800"
        />
      </div>

      <Input
        placeholder="Complete Address"
        value={location.address}
        onChange={(e) => handleLocationChange('address', e.target.value)}
        className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800"
      />
    </div>
  );
};
