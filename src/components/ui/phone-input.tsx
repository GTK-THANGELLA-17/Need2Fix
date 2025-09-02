
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
];

export const PhoneInput: React.FC<PhoneInputProps> = ({ 
  value, 
  onChange, 
  placeholder = "Enter phone number", 
  required = false,
  className = ""
}) => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (newCode: string) => {
    setCountryCode(newCode);
    onChange(`${newCode}${phoneNumber}`);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value.replace(/\D/g, ''); // Only numbers
    setPhoneNumber(newNumber);
    onChange(`${countryCode}${newNumber}`);
  };

  React.useEffect(() => {
    if (value) {
      const matchedCode = countryCodes.find(c => value.startsWith(c.code));
      if (matchedCode) {
        setCountryCode(matchedCode.code);
        setPhoneNumber(value.replace(matchedCode.code, ''));
      }
    }
  }, [value]);

  return (
    <div className={`flex ${className}`}>
      <Select value={countryCode} onValueChange={handleCountryCodeChange}>
        <SelectTrigger className="w-24 rounded-r-none border-r-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.flag} {country.code}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        required={required}
        className="rounded-l-none flex-1"
      />
    </div>
  );
};
