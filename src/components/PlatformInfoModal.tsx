
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Users, Shield, Clock, Star, Phone, MessageSquare, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlatformInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlatformInfoModal = ({ isOpen, onClose }: PlatformInfoModalProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Choose Your Service",
      icon: Search,
      description: "Browse through our wide range of professional services",
      details: [
        "Explore 20+ service categories including Electrician, Plumber, Carpenter, Mechanic, and more",
        "Each service category shows verified professionals in your area",
        "View service descriptions and typical pricing ranges",
        "All services available across 100+ cities in India"
      ]
    },
    {
      title: "Enter Your Location",
      icon: MapPin,
      description: "Provide your location details for accurate matching",
      details: [
        "Select your state and city from the dropdown menu",
        "Enter your specific address or area",
        "Our system automatically finds nearby service providers",
        "Location helps us show the most relevant professionals"
      ]
    },
    {
      title: "Fill Your Requirements",
      icon: MessageSquare,
      description: "Describe your service needs in detail",
      details: [
        "Enter your name and phone number for contact",
        "Describe your specific service requirements",
        "Mention any additional details or preferences",
        "Select urgency level (Immediate, Within 24 hours, or Flexible)",
        "All information is used to create a personalized WhatsApp message"
      ]
    },
    {
      title: "View Verified Professionals",
      icon: Shield,
      description: "Browse through background-verified service providers",
      details: [
        "See profiles of verified professionals in your area",
        "View ratings, reviews, and experience details",
        "Check availability and response times",
        "All professionals undergo thorough background verification"
      ]
    },
    {
      title: "Contact via WhatsApp",
      icon: Phone,
      description: "Connect directly with your chosen service provider",
      details: [
        "Click 'Contact via WhatsApp' on any professional's profile",
        "A pre-filled WhatsApp message opens with all your details",
        "Review the message and click 'Send' to contact them",
        "Direct communication ensures faster response and clarity"
      ]
    },
    {
      title: "Get Service & Rate",
      icon: Star,
      description: "Receive quality service and share your experience",
      details: [
        "Professional contacts you within 30 minutes typically",
        "Discuss pricing, timing, and service details directly",
        "Receive quality service with satisfaction guarantee",
        "Rate and review the professional to help others"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Average response time of 30 minutes"
    },
    {
      icon: Shield,
      title: "100% Verified",
      description: "All professionals are background checked"
    },
    {
      icon: Users,
      title: "Wide Network",
      description: "1000+ professionals across India"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "4.8+ average rating from customers"
    }
  ];

  if (!isOpen) return null;

  const CurrentStepIcon = steps[activeStep].icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
                How Need2Fix Works
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Your complete guide to using our platform
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    activeStep === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  Step {index + 1}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <CurrentStepIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between mb-8">
            <Button
              variant="outline"
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
            >
              Previous Step
            </Button>
            <Button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
            >
              Next Step
            </Button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Why Choose Need2Fix?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BenefitIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <p className="text-center text-gray-700 dark:text-gray-300">
              <strong>Need Help?</strong> Contact us at{" "}
              <span className="font-semibold">+91 8499090369</span> or use our in-app assistant
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
