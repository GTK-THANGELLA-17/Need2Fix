
import React from 'react';
import { MessageCircle, Star, MapPin, Clock, DollarSign, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceProvider } from '@/data/serviceProviders';
import { CONTACT_CONFIG } from '@/config/contact';

interface ServiceProviderCardProps {
  provider: ServiceProvider;
  userDetails: {
    name: string;
    phone: string;
    email?: string;
    needDescription: string;
    additionalDetails: string;
    location: { state: string; city: string; address: string };
    urgency: string;
  };
  serviceName: string;
}

export const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({ 
  provider, 
  userDetails, 
  serviceName 
}) => {
  const handleWhatsAppClick = () => {
    const message = `🔧 *New Service Request*

👤 *Customer Information:*
Name: ${userDetails.name}
Phone: ${userDetails.phone}

📍 *Service Location:*
${userDetails.location.address || 'Address not specified'}
${userDetails.location.city}, ${userDetails.location.state}

🛠️ *Service Details:*
Service: ${serviceName}
Need: ${userDetails.needDescription}
Urgency: ${userDetails.urgency}

📝 *Additional Details:*
${userDetails.additionalDetails || 'No additional details provided'}

Please contact me for this service. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    // Use centralized contact number instead of provider's number
    const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-xl">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col space-y-4">
          {/* Provider Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {provider.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {provider.rating}/5.0
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {provider.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Provider Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">
                {provider.location.city}, {provider.location.state}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-gray-700 dark:text-gray-300">
                {provider.availability}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-purple-600" />
              <span className="text-gray-700 dark:text-gray-300">
                {provider.pricing}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-orange-600" />
              <span className="text-gray-700 dark:text-gray-300">
                {provider.specialties.slice(0, 2).join(', ')}
              </span>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
              Specialties:
            </h4>
            <div className="flex flex-wrap gap-2">
              {provider.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact via WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
