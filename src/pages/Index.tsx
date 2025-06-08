import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavigationHeader } from "@/components/NavigationHeader";
import { IntroPage } from "@/components/IntroPage";
import { ServiceCard } from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import LoadingScreen from "@/components/LoadingScreen";
import { Footer } from "@/components/Footer";
import { LocationSelector } from "@/components/LocationSelector";
import { services } from "@/data/services";
import { 
  Star,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Award,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({ state: '', city: '', address: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleExploreServices = () => {
    setShowIntro(false);
  };

  const handleBackToIntro = () => {
    setShowIntro(true);
  };

  const handleLocationChange = (location: { state: string; city: string; address: string }) => {
    setUserLocation(location);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showIntro) {
    return (
      <ThemeProvider defaultTheme="light" storageKey="need2fix-app-theme">
        <IntroPage onExploreServices={handleExploreServices} />
      </ThemeProvider>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="need2fix-app-theme">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-all duration-700 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full blur-3xl"
          />
        </div>

        <NavigationHeader 
          showLocationSelector={false} 
          showBackButton={true}
          onBackClick={handleBackToIntro}
          onExploreServicesClick={handleExploreServices}
        />
        
        <main className="container mx-auto px-4 py-6 sm:py-8 relative z-10 max-w-7xl">
          {/* Enhanced Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                All Services Available
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "300px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4 sm:mb-6 relative overflow-hidden max-w-full"
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
            >
              Professional services at your doorstep across India. Choose from our wide range of trusted service providers.
            </motion.p>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-4"
            >
              {[
                { icon: Star, text: "4.8+ Rating", color: "text-yellow-500" },
                { icon: Shield, text: "Verified Professionals", color: "text-green-500" },
                { icon: Clock, text: "30min Response", color: "text-blue-500" },
                { icon: Users, text: "10K+ Happy Customers", color: "text-purple-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-1 sm:space-x-2 bg-white/80 dark:bg-gray-800/80 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <item.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${item.color}`} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Location Selector - Moved to just below heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 sm:mb-12 px-4"
          >
            <LocationSelector onLocationChange={handleLocationChange} />
          </motion.div>

          {/* Enhanced Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto mb-16 sm:mb-20 px-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <ServiceCard
                  service={service}
                  onClick={() => handleServiceClick(service)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced App Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-6xl mx-auto mb-16 sm:mb-20 px-4"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Why Choose Need2Fix?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We're revolutionizing home services with technology, trust, and transparency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Clock,
                  title: "Lightning Fast",
                  description: "Connect with verified professionals in under 30 minutes",
                  color: "from-blue-500 to-cyan-500",
                  stats: "30min avg"
                },
                {
                  icon: Shield,
                  title: "100% Verified",
                  description: "All service providers undergo thorough background verification",
                  color: "from-green-500 to-emerald-500",
                  stats: "Background checked"
                },
                {
                  icon: Award,
                  title: "Quality Assured",
                  description: "Rated by thousands of customers with satisfaction guarantee",
                  color: "from-purple-500 to-pink-500",
                  stats: "4.8★ rating"
                },
                {
                  icon: Users,
                  title: "Expert Network",
                  description: "Access to skilled professionals across multiple service categories",
                  color: "from-orange-500 to-red-500",
                  stats: "1000+ experts"
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing",
                  description: "No hidden charges, upfront pricing with detailed breakdown",
                  color: "from-teal-500 to-blue-500",
                  stats: "No hidden fees"
                },
                {
                  icon: TrendingUp,
                  title: "Growing Network",
                  description: "Expanding across India with new cities and services",
                  color: "from-indigo-500 to-purple-500",
                  stats: "100+ cities"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/30 shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">{feature.title}</h3>
                      <span className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                        {feature.stats}
                      </span>
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>

        <Footer />

        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;
