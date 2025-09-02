
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Shield, Zap, MessageCircle } from 'lucide-react';

export const InformationBanners: React.FC = () => {
  const features = [
    {
      icon: Info,
      title: "Why do we need your details?",
      description: "Your information helps us create a pre-filled WhatsApp message with your service request. When you contact a provider, all your details will be automatically included - you just review and send! 📱✨",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "100% Verified Providers",
      description: "All our service providers are background verified, skill-tested, and customer-rated for your complete safety and satisfaction! 🛡️⭐",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Instant Connection",
      description: "Get connected with available providers in your area within 30 minutes through direct WhatsApp contact! ⚡💬",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
          className="relative group"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
          
          {/* Content */}
          <div className="relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
            <div className="flex items-start gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-10 h-10 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </motion.div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 30 }}
        className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4"
      >
        <div className="flex items-start gap-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
              📞 Need Help? Contact Us Directly!
            </h4>
            <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">
              For immediate assistance or any queries, call us at{" "}
              <span className="font-semibold bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-lg">
                📞 +91 8499090369
              </span>{" "}
              or WhatsApp us! We're here to help 24/7! 🚀✨
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
