
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DeveloperModal } from "@/components/DeveloperModal";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);

  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 mt-20"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Need2Fix
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Connecting you with trusted local service providers across India. Your one-stop solution for all home and professional services.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Available across India</span>
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Our Services
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>Electrician</div>
                <div>Plumber</div>
                <div>Carpenter</div>
                <div>Mechanic</div>
                <div>House Labor</div>
                <div>TV Installation</div>
                <div>Drainage Cleaning</div>
                <div>Water Supply</div>
                <div>Iron Work</div>
                <div>Construction</div>
                <div>Porter Services</div>
                <div>And many more...</div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 8499090369</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>Available 24/7 for support</span>
                </div>
              </div>

              {/* About Application */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Why Need2Fix?
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  We solve the common problem of finding reliable service providers when you need them urgently. 
                  No more asking friends for contact numbers or worrying about trust - we connect you with verified professionals instantly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for connecting communities</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsDeveloperModalOpen(true)}
                    className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    Developed by G.Thangella
                  </Button>
                </motion.div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 Need2Fix. Bridging the gap between service providers and customers across India.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      <DeveloperModal
        open={isDeveloperModalOpen}
        onOpenChange={setIsDeveloperModalOpen}
      />
    </>
  );
};
