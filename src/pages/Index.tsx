
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationHeader } from "@/components/NavigationHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ServiceModal from "@/components/ServiceModal";
import Need2FixAssistant from "@/components/Need2FixAssistant";
import { services } from "@/data/services";

interface IndexProps {
  onBackToHome?: () => void;
  showChatbotButton?: boolean;
}

const Index = ({ onBackToHome, showChatbotButton = false }: IndexProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [initialLocation, setInitialLocation] = useState<{ state: string; city: string; address: string } | undefined>(undefined);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (service: any, location?: { state: string; city: string; address: string }) => {
    setSelectedService(service);
    setInitialLocation(location);
  };

  const closeModal = () => {
    setSelectedService(null);
    setInitialLocation(undefined);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-all duration-700">
      <NavigationHeader 
        showBackButton={false} 
        onBackClick={onBackToHome}
      />
      
      {/* Back to Home and Chatbot Button */}
      {onBackToHome && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 pt-4 max-w-7xl"
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onBackToHome}
                variant="outline"
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl px-6 py-3"
              >
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <Home className="w-4 h-4" />
                  <span className="font-medium">Back to Home</span>
                </div>
              </Button>
            </motion.div>

            {/* Chatbot Button for Services Page */}
            {showChatbotButton && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => setShowChatbot(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl rounded-xl px-6 py-3"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-medium">Need Help?</span>
                  </div>
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Choose from our comprehensive range of professional services
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <ServiceCard
                  service={service}
                  onClick={() => handleServiceClick(service)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />

      <ServiceModal
        isOpen={!!selectedService}
        onClose={closeModal}
        service={selectedService}
        initialLocation={initialLocation}
      />

      {/* Conditional chatbot for services page */}
      {showChatbot && (
        <Need2FixAssistant onClose={() => setShowChatbot(false)} />
      )}
    </div>
  );
};

export default Index;
