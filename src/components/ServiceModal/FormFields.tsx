
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PhoneInput } from '@/components/ui/phone-input';
import { LocationSelector } from '@/components/LocationSelector';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { needOptions } from '@/data/serviceOptions';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface FormFieldsProps {
  formData: {
    name: string;
    phone: string;
    needDescription: string;
    additionalDetails: string;
    location: { state: string; city: string; address: string };
    urgency: string;
    preferredDate: Date | undefined;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  service: { id: string; name: string };
  handleLocationChange: (location: any) => void;
}

const fieldVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.4
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  setFormData,
  service,
  handleLocationChange
}) => {
  const serviceOptions = needOptions[service.id as keyof typeof needOptions] || [
    'Installation/Setup',
    'Repair/Maintenance',
    'Consultation',
    'Emergency service',
    'Regular maintenance',
    'Replacement'
  ];

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Personal Details Section */}
      <motion.div variants={fieldVariants} className="space-y-4">
        <motion.h3 
          className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          👤 Personal Information
        </motion.h3>
        
        <motion.div className="space-y-4">
          <motion.div 
            className="space-y-2"
            variants={fieldVariants}
            whileHover={{ scale: 1.01 }}
            whileFocus={{ scale: 1.01 }}
          >
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="text-red-500">*</span>
              Your Full Name
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                (included in WhatsApp message)
              </span>
            </label>
            <motion.div
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="h-12 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                required
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            variants={fieldVariants}
            whileHover={{ scale: 1.01 }}
          >
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="text-red-500">*</span>
              Phone Number
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                (for provider callback)
              </span>
            </label>
            <motion.div
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PhoneInput
                value={formData.phone}
                onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                placeholder="Enter your phone number"
                required
                className="h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Service Details Section */}
      <motion.div variants={fieldVariants} className="space-y-4">
        <motion.h3 
          className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          🔧 Service Details
        </motion.h3>

        <motion.div 
          className="space-y-2"
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <span className="text-red-500">*</span>
            What do you need?
            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              (helps providers understand your requirement)
            </span>
          </label>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Select 
              value={formData.needDescription} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, needDescription: value }))}
            >
              <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-lg focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300">
                <SelectValue placeholder="Select your specific need" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 max-h-60 z-[200]">
                {serviceOptions.map((option) => (
                  <SelectItem 
                    key={option} 
                    value={option}
                    className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer text-base py-3"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-2"
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <span className="text-red-500">*</span>
            Service Location
            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              (where you need the service)
            </span>
          </label>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
          >
            <LocationSelector onLocationChange={handleLocationChange} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-2"
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <span className="text-red-500">*</span>
            Preferred Date
            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              (when you need the service)
            </span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 justify-start text-left font-normal text-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500",
                    !formData.preferredDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  {formData.preferredDate ? (
                    format(formData.preferredDate, "PPP")
                  ) : (
                    <span>Select preferred date</span>
                  )}
                </Button>
              </motion.div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={formData.preferredDate}
                onSelect={(date) => setFormData(prev => ({ ...prev, preferredDate: date }))}
                disabled={(date) =>
                  date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))
                }
                initialFocus
                className="p-3"
              />
            </PopoverContent>
          </Popover>
        </motion.div>

        <motion.div 
          className="space-y-2"
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <span className="text-red-500">*</span>
            Urgency Level
            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              (helps providers prioritize)
            </span>
          </label>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Select 
              value={formData.urgency} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
            >
              <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-lg focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300">
                <SelectValue placeholder="How urgent is this?" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 z-[200]">
                <SelectItem value="emergency" className="text-gray-900 dark:text-gray-100 hover:bg-red-50 dark:hover:bg-red-900/30 text-base py-3">
                  🚨 Emergency (Within 2 hours)
                </SelectItem>
                <SelectItem value="urgent" className="text-gray-900 dark:text-gray-100 hover:bg-orange-50 dark:hover:bg-orange-900/30 text-base py-3">
                  ⚡ Urgent (Today)
                </SelectItem>
                <SelectItem value="normal" className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-base py-3">
                  📅 Normal (Within 3 days)
                </SelectItem>
                <SelectItem value="flexible" className="text-gray-900 dark:text-gray-100 hover:bg-green-50 dark:hover:bg-green-900/30 text-base py-3">
                  🕐 Flexible (This week)
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-2"
          variants={fieldVariants}
          whileHover={{ scale: 1.01 }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            📝 Additional Details
            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              (optional - any specific requirements)
            </span>
          </label>
          <motion.div
            whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Textarea
              placeholder="Describe your issue in detail, preferred time, special requirements..."
              value={formData.additionalDetails}
              onChange={(e) => setFormData(prev => ({ ...prev, additionalDetails: e.target.value }))}
              rows={4}
              className="resize-none border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-base focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
