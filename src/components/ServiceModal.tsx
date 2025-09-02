
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  initialLocation?: { state: string; city: string; address: string };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service, initialLocation }) => {
  const handleLanguageChange = (language: string) => {
    console.log('Language changed to:', language);
  };

  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col relative"
        >
          {/* Enhanced Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20 pointer-events-none" />
          
          {/* Header - Fixed */}
          <div className="relative z-10 flex-shrink-0">
            <ServiceModalHeader service={service} onClose={onClose} />
          </div>

          {/* Scrollable Content Container */}
          <div className="flex-1 min-h-0 relative z-10 overflow-y-auto">
            {/* Language Translation Widget - Now scrollable */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-3 sm:p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50"
            >
              <TranslationWidget onLanguageChange={handleLanguageChange} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 sm:p-6 pb-8"
            >
              <ServiceModalForm 
                service={service} 
                onClose={onClose} 
                initialLocation={initialLocation}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
