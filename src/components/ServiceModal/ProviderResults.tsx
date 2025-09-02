
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceProviderCard } from './ServiceProviderCard';

interface ProviderResultsProps {
  service: { id: string; name: string };
  formData: {
    name: string;
    phone: string;
    needDescription: string;
    additionalDetails: string;
    location: { state: string; city: string; address: string };
    urgency: string;
    preferredDate: Date | undefined;
  };
  matchingProviders: any[];
  matchType: 'area' | 'city' | 'state' | 'none';
  onBack: () => void;
}

export const ProviderResults: React.FC<ProviderResultsProps> = ({
  service,
  formData,
  matchingProviders,
  matchType,
  onBack
}) => {
  const getMatchTypeMessage = () => {
    const areaText = formData.location.address ? ` (${formData.location.address})` : '';
    
    switch (matchType) {
      case 'area':
        return `Found ${matchingProviders.length} provider(s) in your specific area${areaText}`;
      case 'city':
        return `Found ${matchingProviders.length} provider(s) in ${formData.location.city}, ${formData.location.state}`;
      case 'state':
        return `Found ${matchingProviders.length} provider(s) in ${formData.location.state} (expanded search)`;
      default:
        return `Found ${matchingProviders.length} provider(s)`;
    }
  };

  const getMatchTypeColor = () => {
    switch (matchType) {
      case 'area':
        return 'text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20';
      case 'city':
        return 'text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20';
      case 'state':
        return 'text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20';
      default:
        return 'text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getMatchTypeIcon = () => {
    switch (matchType) {
      case 'area':
        return '🎯';
      case 'city':
        return '🏙️';
      case 'state':
        return '🌍';
      default:
        return '📍';
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Available {service.name} Providers
          </h3>
          <Button
            variant="outline"
            onClick={onBack}
            className="text-sm"
          >
            Back to Form
          </Button>
        </div>
        
        <div className={`border rounded-lg p-3 mb-4 ${getMatchTypeColor()}`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{getMatchTypeIcon()}</span>
            <p className="text-sm font-medium">
              {getMatchTypeMessage()}
            </p>
          </div>
          {matchType === 'state' && (
            <p className="text-xs mt-1 opacity-80">
              We expanded the search to your entire state to find available providers
            </p>
          )}
          {matchType === 'area' && formData.location.address && (
            <p className="text-xs mt-1 opacity-80">
              Showing providers specifically available in your area
            </p>
          )}
        </div>
        
        {/* WhatsApp Process Explanation */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                How WhatsApp Contact Works
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                When you click "Contact via WhatsApp", your details (name, phone, service needs, location) will be pre-filled in a WhatsApp message. 
                You can review and send it directly to the provider - no need to type everything again!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
        {matchingProviders.map((provider) => (
          <ServiceProviderCard
            key={provider.id}
            provider={provider}
            userDetails={formData}
            serviceName={service.name}
          />
        ))}
      </div>
    </div>
  );
};
