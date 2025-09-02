
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { findMatchingProviders } from '@/services/providerMatching';
import { FormFields } from './FormFields';
import { ProviderResults } from './ProviderResults';
import { FormSubmission } from './FormSubmission';
import { InformationBanners } from './InformationBanners';

interface ServiceModalFormProps {
  service: {
    id: string;
    name: string;
  };
  onClose: () => void;
  initialLocation?: { state: string; city: string; address: string };
}

export const ServiceModalForm: React.FC<ServiceModalFormProps> = ({ 
  service, 
  onClose, 
  initialLocation 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    needDescription: '',
    additionalDetails: '',
    location: initialLocation || { state: '', city: '', address: '' },
    urgency: '',
    preferredDate: undefined as Date | undefined
  });
  const [showProviders, setShowProviders] = useState(false);
  const [matchingProviders, setMatchingProviders] = useState<any[]>([]);
  const [matchType, setMatchType] = useState<'area' | 'city' | 'state' | 'none'>('none');
  const [isLoading, setIsLoading] = useState(false);

  // Update form data when initialLocation changes
  useEffect(() => {
    if (initialLocation) {
      setFormData(prev => ({ ...prev, location: initialLocation }));
    }
  }, [initialLocation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.location.state || !formData.location.city) {
      alert('🚨 Please select your state and city to find service providers.');
      return;
    }

    if (!formData.name || !formData.phone) {
      alert('📝 Please enter your name and phone number.');
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('🚀 Starting provider search with form data:', formData);
      
      const matchingResult = findMatchingProviders(
        service.id, 
        formData.location.state, 
        formData.location.city,
        formData.location.address
      );
      
      console.log('📊 Search result:', matchingResult);
      
      if (matchingResult.matchType === 'none') {
        const locationStr = formData.location.address 
          ? `${formData.location.address}, ${formData.location.city}, ${formData.location.state}`
          : `${formData.location.city}, ${formData.location.state}`;
        
        alert(`❌ No ${service.name} providers are currently available in ${locationStr}. Please try a different location or contact us directly at 📞 +91 8499090369.`);
        setIsLoading(false);
        return;
      }
      
      setMatchingProviders(matchingResult.providers);
      setMatchType(matchingResult.matchType);
      setShowProviders(true);
    } catch (error) {
      console.error('❌ Error finding providers:', error);
      alert('⚠️ Error finding providers. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationChange = (location: any) => {
    console.log('📍 Location changed:', location);
    setFormData(prev => ({ ...prev, location }));
  };

  if (showProviders) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="provider-results"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            duration: 0.3
          }}
          className="w-full"
        >
          <ProviderResults
            service={service}
            formData={formData}
            matchingProviders={matchingProviders}
            matchType={matchType}
            onBack={() => setShowProviders(false)}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Welcome Message with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center mb-8"
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          🔧 Book {service.name} Service
        </motion.h2>
        <motion.p 
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Fill in your details below to connect with verified professionals
        </motion.p>
      </motion.div>
      
      {/* Enhanced Information Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.2, 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        <InformationBanners />
      </motion.div>
      
      {/* Form Fields Container with Better Scrolling */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.3, 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          duration: 0.6
        }}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <FormFields
            formData={formData}
            setFormData={setFormData}
            service={service}
            handleLocationChange={handleLocationChange}
          />
        </motion.div>
      </motion.div>
      
      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 0.5, 
          type: "spring", 
          stiffness: 400, 
          damping: 20,
          duration: 0.4
        }}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
      >
        <FormSubmission
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      </motion.div>

      {/* Success Indicators */}
      <AnimatePresence>
        {formData.name && formData.phone && formData.location.state && formData.location.city && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: -20,
              transition: { duration: 0.2 }
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 25,
              delay: 0.1
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
            }}
            className="bg-gradient-to-r from-green-50 via-green-50 to-emerald-50 dark:from-green-900/20 dark:via-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 shadow-xl"
          >
            <motion.div 
              className="flex items-center gap-3 text-green-700 dark:text-green-300"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <motion.div
                  className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0.3, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <motion.span 
                className="text-lg font-bold"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ✅ Ready to find providers!
              </motion.span>
            </motion.div>
            <motion.p
              className="text-green-600 dark:text-green-400 mt-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              🎉 All required fields completed. Click "Find Service Providers" to continue!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex justify-center space-x-2 mt-8"
      >
        {[1, 2, 3].map((step, index) => (
          <motion.div
            key={step}
            className={`w-3 h-3 rounded-full ${
              step === 1 ? 'bg-blue-500' : 
              step === 2 ? 'bg-gray-300 dark:bg-gray-600' : 
              'bg-gray-300 dark:bg-gray-600'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.7 + (index * 0.1),
              type: "spring",
              stiffness: 400
            }}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};
