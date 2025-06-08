
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Shield, Users, MapPin, Clock } from 'lucide-react';

const LoadingScreen = () => {
  const icons = [
    { Icon: Wrench, delay: 0, color: 'text-blue-500' },
    { Icon: Zap, delay: 0.2, color: 'text-yellow-500' },
    { Icon: Shield, delay: 0.4, color: 'text-green-500' },
    { Icon: Users, delay: 0.6, color: 'text-purple-500' },
    { Icon: MapPin, delay: 0.8, color: 'text-red-500' },
    { Icon: Clock, delay: 1.0, color: 'text-orange-500' }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center z-50">
      <div className="text-center p-4 sm:p-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center">
            <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl opacity-75 blur"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4"
        >
          Need2Fix
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
        >
          Connecting You with Trusted Service Providers
        </motion.p>

        {/* Floating Icons Animation - Mobile Optimized */}
        <div className="relative w-64 h-32 sm:w-80 sm:h-40 mx-auto mb-6 sm:mb-8">
          {icons.map(({ Icon, delay, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                x: [0, Math.cos(index * 60 * Math.PI / 180) * 60, Math.cos(index * 60 * Math.PI / 180) * 80],
                y: [0, Math.sin(index * 60 * Math.PI / 180) * 40, Math.sin(index * 60 * Math.PI / 180) * 60],
              }}
              transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className={`p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg ${color}`}>
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-48 sm:w-64 h-1 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
        >
          Loading your service experience...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
