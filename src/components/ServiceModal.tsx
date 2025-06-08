
import React from 'react';
import { TranslationWidget } from '@/components/TranslationWidget';
import { ServiceModalHeader } from './ServiceModal/ServiceModalHeader';
import { ServiceModalForm } from './ServiceModal/ServiceModalForm';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    name: string;
    icon: React.ComponentType<any> | React.ReactNode;
    description: string;
    category?: string;
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const handleLanguageChange = (language: string) => {
    console.log('Language changed to:', language);
  };

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Header */}
        <ServiceModalHeader service={service} onClose={onClose} />

        {/* Translation Widget */}
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <TranslationWidget onLanguageChange={handleLanguageChange} />
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <ServiceModalForm service={service} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
