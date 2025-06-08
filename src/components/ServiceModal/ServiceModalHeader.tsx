
import React from 'react';
import { X } from 'lucide-react';

interface ServiceModalHeaderProps {
  service: {
    name: string;
    icon: React.ComponentType<any> | React.ReactNode;
    description: string;
  };
  onClose: () => void;
}

export const ServiceModalHeader: React.FC<ServiceModalHeaderProps> = ({ service, onClose }) => {
  const renderIcon = () => {
    if (React.isValidElement(service.icon)) {
      return service.icon;
    }
    if (typeof service.icon === 'function') {
      const IconComponent = service.icon;
      return <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 relative flex-shrink-0">
      <button
        onClick={onClose}
        className="absolute right-3 top-3 sm:right-4 sm:top-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
      >
        <X size={20} className="sm:w-6 sm:h-6" />
      </button>
      <div className="flex items-center gap-3 sm:gap-4 pr-12">
        <div className="bg-white/20 p-2 sm:p-3 rounded-full">
          {renderIcon()}
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
            Request {service.name}
          </h2>
          <p className="text-blue-100 mt-1 text-sm sm:text-base">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};
