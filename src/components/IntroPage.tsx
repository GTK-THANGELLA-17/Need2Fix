import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Users, Clock, Star, Sparkles, UserPlus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import ServiceProviderModal from "@/components/ServiceProviderModal";
import { PlatformInfoModal } from "@/components/PlatformInfoModal";
import { TranslationProvider } from "@/contexts/TranslationContext";

interface IntroPageProps {
  onExploreServices: () => void;
}

export const IntroPage = ({ onExploreServices }: IntroPageProps) => {
  const [isServiceProviderModalOpen, setIsServiceProviderModalOpen] = useState(false);
  const [isPlatformInfoModalOpen, setIsPlatformInfoModalOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background verified for your safety",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get connected with service providers within 30 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Wide Network",
      description: "Access to thousands of skilled professionals across India",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "Rated professionals with customer satisfaction guarantee",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <ThemeProvider defaultTheme="light" storageKey="need2fix-app-theme">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-all duration-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-400 rounded-full blur-3xl"
          />
        </div>

        <NavigationHeader />
        
        <main className="container mx-auto px-4 py-8 relative z-10 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            {/* Main Title */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                Need2Fix
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Your Trusted Service Network
              </p>
            </motion.div>

            {/* Explore Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onExploreServices}
                  size="lg"
                  className="w-full max-w-sm mx-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="flex items-center space-x-3 relative z-10">
                    <Sparkles className="w-6 h-6" />
                    <span>Explore Services</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Service Provider Registration Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16 px-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => setIsServiceProviderModalOpen(true)}
                  variant="outline"
                  size="lg"
                  className="w-full max-w-md mx-auto border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-base sm:text-lg font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-center leading-tight">Service Provider - Register Here</span>
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/30 shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
                About Need2Fix
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  This application is designed to provide details of service providers. Whenever someone needs a service, 
                  they can use the app to find and contact the right service person directly.
                </p>
                <p>
                  Many people don't know where to find these service providers. They often have to ask others or go from 
                  shop to shop searching for contacts. This application aims to solve that problem by offering a platform 
                  where users can easily search and connect with local service providers.
                </p>
              </div>
              
              {/* More About Platform Button */}
              <div className="mt-6 text-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => setIsPlatformInfoModalOpen(true)}
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Info className="w-5 h-5" />
                      <span>More About This Platform</span>
                    </div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl relative overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>

        <Footer />

        <TranslationProvider>
          <ServiceProviderModal
            isOpen={isServiceProviderModalOpen}
            onClose={() => setIsServiceProviderModalOpen(false)}
          />
        </TranslationProvider>

        <PlatformInfoModal
          isOpen={isPlatformInfoModalOpen}
          onClose={() => setIsPlatformInfoModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};
