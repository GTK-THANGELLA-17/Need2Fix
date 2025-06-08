
import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LocationSelector } from '@/components/LocationSelector';
import { needOptions } from '@/data/services';

interface ServiceModalFormProps {
  service: {
    id: string;
    name: string;
  };
  onClose: () => void;
}

export const ServiceModalForm: React.FC<ServiceModalFormProps> = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    needDescription: '',
    additionalDetails: '',
    location: { state: '', city: '', address: '' },
    urgency: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🔧 *Service Request for ${service.name}*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📍 *Location:*
${formData.location.address}
${formData.location.city}, ${formData.location.state}

🛠️ *Service Details:*
Need: ${formData.needDescription}
Urgency: ${formData.urgency}

📝 *Additional Details:*
${formData.additionalDetails}

*Service Category:* ${service.name}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918499090369?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleLocationChange = (location: any) => {
    setFormData(prev => ({ ...prev, location }));
  };

  const serviceOptions = needOptions[service.id as keyof typeof needOptions] || [
    'Installation/Setup',
    'Repair/Maintenance',
    'Consultation',
    'Emergency service',
    'Regular maintenance',
    'Replacement'
  ];

  return (
    <div className="p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Input
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="h-10 sm:h-12"
            required
          />
          <Input
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="h-10 sm:h-12"
            required
          />
        </div>

        <Input
          placeholder="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="h-10 sm:h-12"
        />

        {/* Need Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            What do you need? *
          </label>
          <Select 
            value={formData.needDescription} 
            onValueChange={(value) => setFormData(prev => ({ ...prev, needDescription: value }))}
          >
            <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select your specific need" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 max-h-60 z-[200]">
              {serviceOptions.map((option) => (
                <SelectItem 
                  key={option} 
                  value={option}
                  className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location Selector */}
        <LocationSelector onLocationChange={handleLocationChange} />

        {/* Urgency */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Urgency Level *
          </label>
          <Select 
            value={formData.urgency} 
            onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
          >
            <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800">
              <SelectValue placeholder="How urgent is this?" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 z-[200]">
              <SelectItem value="emergency" className="text-gray-900 dark:text-gray-100 hover:bg-red-50 dark:hover:bg-red-900/30">
                🚨 Emergency (Within 2 hours)
              </SelectItem>
              <SelectItem value="urgent" className="text-gray-900 dark:text-gray-100 hover:bg-orange-50 dark:hover:bg-orange-900/30">
                ⚡ Urgent (Today)
              </SelectItem>
              <SelectItem value="normal" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                📅 Normal (Within 3 days)
              </SelectItem>
              <SelectItem value="flexible" className="text-gray-900 dark:text-gray-100 hover:bg-green-50 dark:hover:bg-green-900/30">
                🕐 Flexible (This week)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Additional Details */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Additional Details
          </label>
          <Textarea
            placeholder="Describe your issue in detail, preferred time, special requirements..."
            value={formData.additionalDetails}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalDetails: e.target.value }))}
            rows={4}
            className="resize-none border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800"
          />
        </div>

        {/* Submit Buttons */}
        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            type="submit"
            className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Send Request via WhatsApp
          </Button>
          
          <div className="text-center">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Don't have WhatsApp?
              </p>
              <a
                href="tel:8499090369"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
              >
                <Phone size={14} />
                Call 8499090369 directly
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
