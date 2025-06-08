import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Briefcase, FileText, Star, Clock, Globe, MessageCircle, PhoneCall, MapPinIcon, Plus, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TranslationWidget } from '@/components/TranslationWidget';
import { services } from '@/data/services';

interface ServiceProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceProviderModal: React.FC<ServiceProviderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    state: '',
    city: '',
    servicesOffered: [] as string[],
    customService: '',
    workingLocations: '',
    workingDays: [] as string[],
    timeSlots: '',
    experience: '',
    bio: '',
    languages: '',
    emergencyAvailable: false,
    subscriptionPlan: 'monthly' // default to monthly plan
  });

  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showCustomService, setShowCustomService] = useState(false);

  const availableServices = services.map(service => service.name);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
    "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesOffered: prev.servicesOffered.includes(service)
        ? prev.servicesOffered.filter(s => s !== service)
        : [...prev.servicesOffered, service]
    }));
  };

  const toggleDay = (day: string) => {
    setFormData(prev => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter(d => d !== day)
        : [...prev.workingDays, day]
    }));
  };

  const detectLocation = () => {
    setIsDetectingLocation(true);
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
              
              setFormData(prev => ({
                ...prev,
                state: detectedState,
                city: detectedCity
              }));
            }
          } catch (error) {
            console.error('Location detection failed:', error);
          }
          setIsDetectingLocation(false);
        },
        (error) => {
          console.error('Location detection failed:', error);
          setIsDetectingLocation(false);
          alert('Location detection failed. Please enter manually.');
        }
      );
    } else {
      setIsDetectingLocation(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const addCustomService = () => {
    if (formData.customService.trim()) {
      setFormData(prev => ({
        ...prev,
        servicesOffered: [...prev.servicesOffered, formData.customService.trim()],
        customService: ''
      }));
      setShowCustomService(false);
    }
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subscriptionPlanText = formData.subscriptionPlan === 'monthly' 
      ? 'Monthly Plan (Direct clients, no commission)'
      : 'Commission-Based Plan (No monthly fee, commission on clients provided)';

    const message = `🔧 *Service Provider Registration*

👤 *Basic Details:*
Name: ${formData.fullName}
Mobile: ${formData.mobileNumber}
Email: ${formData.email}
Location: ${formData.city}, ${formData.state}

💳 *Subscription Plan:*
${subscriptionPlanText}

🛠️ *Service Details:*
Services: ${formData.servicesOffered.join(', ')}
Work Locations: ${formData.workingLocations}
Working Days: ${formData.workingDays.join(', ')}
Time Slots: ${formData.timeSlots}
Experience: ${formData.experience}
Languages: ${formData.languages}
Emergency Available: ${formData.emergencyAvailable ? 'Yes' : 'No'}

📝 *Bio:*
${formData.bio}

*Note:* I will send my profile photo and certifications in the next messages.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918499090369?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 lg:p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-3 sm:top-3 lg:right-4 lg:top-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 pr-10 sm:pr-12">
            <div className="bg-white/20 p-1.5 sm:p-2 lg:p-3 rounded-full">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </div>
            <div>
              <h2 className="text-sm sm:text-lg lg:text-2xl xl:text-3xl font-bold leading-tight" data-translate data-original-text="Service Provider Registration">
                Service Provider Registration
              </h2>
              <p className="text-blue-100 mt-0.5 sm:mt-1 lg:mt-2 text-xs sm:text-sm lg:text-base xl:text-lg" data-translate data-original-text="Join Our Professional Network">
                Join Our Professional Network
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-3 sm:p-4 lg:p-6 xl:p-8 overflow-y-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(95vh-140px)]">
          <TranslationWidget onLanguageChange={handleLanguageChange} />

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Subscription Plan Selection */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 sm:p-2 rounded-lg">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100" data-translate data-original-text="Choose Your Subscription Plan">
                  Choose Your Subscription Plan
                </h3>
              </div>
              
              <RadioGroup 
                value={formData.subscriptionPlan} 
                onValueChange={(value) => setFormData(prev => ({...prev, subscriptionPlan: value}))}
                className="space-y-3 sm:space-y-4"
              >
                <div className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                  <RadioGroupItem value="monthly" id="monthly" className="mt-1" />
                  <div className="flex-1">
                    <label htmlFor="monthly" className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                      Monthly Plan
                    </label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      You will receive clients directly from the platform without any commission charges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
                  <RadioGroupItem value="commission" id="commission" className="mt-1" />
                  <div className="flex-1">
                    <label htmlFor="commission" className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                      Commission-Based Plan
                    </label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      You don't pay a monthly fee—instead, a commission is charged only when clients are provided by the company. 
                      This option is ideal for those who prefer to pay based on results rather than committing to a fixed monthly payment.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Basic Details Section */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-gray-200 dark:border-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-lg">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100" data-translate data-original-text="Basic Details">
                  Basic Details
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                    <User size={12} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                    <span data-translate data-original-text="Full Name">Full Name</span> *
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                    <Phone size={12} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                    <span data-translate data-original-text="Mobile Number">Mobile Number</span> *
                  </label>
                  <Input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                  <Mail size={12} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  <span data-translate data-original-text="Email ID">Email ID</span> *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Location */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                    <MapPin size={12} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                    <span data-translate data-original-text="Current Location">Current Location</span> *
                  </label>
                  <Button
                    type="button"
                    onClick={detectLocation}
                    disabled={isDetectingLocation}
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-200 hover:border-blue-400 w-full sm:w-auto"
                  >
                    <MapPinIcon size={12} className="mr-1" />
                    <span data-translate data-original-text="Auto-Detect">
                      {isDetectingLocation ? 'Detecting...' : 'Auto-Detect'}
                    </span>
                  </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <Select value={formData.state} onValueChange={handleSelectChange('state')}>
                    <SelectTrigger className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-sm">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 max-h-60 z-[70]">
                      {indianStates.map((state) => (
                        <SelectItem 
                          key={state} 
                          value={state}
                          className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer text-sm"
                        >
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                    placeholder="City"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Service Details Section */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-gray-200 dark:border-gray-700">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 sm:p-2 rounded-lg">
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100" data-translate data-original-text="Service Details">
                  Service Details
                </h3>
              </div>

              {/* Services Offered */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300" data-translate data-original-text="Services Offered">
                    Services Offered * (Select multiple)
                  </label>
                  <Button
                    type="button"
                    onClick={() => setShowCustomService(!showCustomService)}
                    variant="outline"
                    size="sm"
                    className="text-xs w-full sm:w-auto"
                  >
                    <Plus size={12} className="mr-1" />
                    Add Custom Service
                  </Button>
                </div>
                
                {showCustomService && (
                  <div className="flex gap-2 mb-3">
                    <Input
                      value={formData.customService}
                      onChange={(e) => setFormData(prev => ({ ...prev, customService: e.target.value }))}
                      placeholder="Enter your custom service"
                      className="h-9 text-sm"
                    />
                    <Button
                      type="button"
                      onClick={addCustomService}
                      size="sm"
                      className="text-xs whitespace-nowrap"
                    >
                      Add
                    </Button>
                  </div>
                )}
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-3">
                  {availableServices.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`p-1.5 sm:p-2 lg:p-3 text-xs sm:text-sm rounded-lg border transition-all ${
                        formData.servicesOffered.includes(service)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Working Locations */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300" data-translate data-original-text="Locations You Can Work In">
                  Locations You Can Work In *
                </label>
                <Input
                  type="text"
                  name="workingLocations"
                  value={formData.workingLocations}
                  onChange={handleInputChange}
                  className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                  placeholder="e.g., Hyderabad, Secunderabad, Gachibowli"
                  required
                />
              </div>

              {/* Working Days */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300" data-translate data-original-text="Working Days">
                  Working Days * (Select multiple)
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-2">
                  {days.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`p-1.5 sm:p-2 text-xs rounded-lg border transition-all ${
                        formData.workingDays.includes(day)
                          ? 'bg-purple-500 text-white border-purple-500'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots and Experience */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                    <Clock size={12} className="sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                    <span data-translate data-original-text="Available Time Slots">Available Time Slots</span> *
                  </label>
                  <Select onValueChange={handleSelectChange('timeSlots')} value={formData.timeSlots}>
                    <SelectTrigger className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-sm">
                      <SelectValue placeholder="Select time slots" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 z-[70]">
                      <SelectItem value="morning" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">Morning (6 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">Afternoon (12 PM - 6 PM)</SelectItem>
                      <SelectItem value="evening" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">Evening (6 PM - 10 PM)</SelectItem>
                      <SelectItem value="all-day" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">All Day (6 AM - 10 PM)</SelectItem>
                      <SelectItem value="flexible" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">Flexible Timing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300" data-translate data-original-text="Years of Experience">
                    Years of Experience *
                  </label>
                  <Select onValueChange={handleSelectChange('experience')} value={formData.experience}>
                    <SelectTrigger className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-sm">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 z-[70]">
                      <SelectItem value="0-1" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">0-1 years</SelectItem>
                      <SelectItem value="1-3" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">1-3 years</SelectItem>
                      <SelectItem value="3-5" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">3-5 years</SelectItem>
                      <SelectItem value="5-10" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">5-10 years</SelectItem>
                      <SelectItem value="10+" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                  <FileText size={12} className="sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                  <span data-translate data-original-text="Short Bio / Description">Short Bio / Description</span> *
                </label>
                <Textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="resize-none border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                  placeholder="Tell us about your skills, specializations, and what makes you unique..."
                  required
                />
              </div>

              {/* Languages */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 sm:gap-2">
                  <Globe size={12} className="sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                  <span data-translate data-original-text="Languages Spoken">Languages Spoken</span> *
                </label>
                <Input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  className="h-9 sm:h-11 lg:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                  placeholder="e.g., English, Hindi, Telugu"
                  required
                />
              </div>

              {/* Emergency Availability */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <input
                  type="checkbox"
                  id="emergencyAvailable"
                  name="emergencyAvailable"
                  checked={formData.emergencyAvailable}
                  onChange={handleInputChange}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="emergencyAvailable" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300" data-translate data-original-text="Available for Emergency Requests">
                  Available for Emergency Requests
                </label>
              </div>
            </div>

            {/* File Upload Note */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1 text-sm">
                    📸 Photo & Certifications Required
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">
                    After submitting the form, you will be redirected to WhatsApp. Please send your profile photo 
                    and any certification or license documents there, as uploads here won't be received directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                type="submit"
                className="w-full h-10 sm:h-12 lg:h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
                <span data-translate data-original-text="Submit via WhatsApp">Submit via WhatsApp</span>
              </Button>
            </div>
          </form>

          {/* Call Option */}
          <div className="mt-4 sm:mt-6 pb-4 sm:pb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">
                Don't have WhatsApp?
              </p>
              <div className="text-center">
                <a
                  href="tel:8499090369"
                  className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs sm:text-sm"
                >
                  <PhoneCall size={12} className="sm:w-4 sm:h-4" />
                  Call 8499090369 to register directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderModal;
