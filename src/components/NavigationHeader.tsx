
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

interface NavigationHeaderProps {
  showLocationSelector?: boolean;
  showBackButton?: boolean;
  onBackClick?: () => void;
  onExploreServicesClick?: () => void;
}

export const NavigationHeader = ({ 
  showLocationSelector = false, 
  showBackButton = false, 
  onBackClick,
  onExploreServicesClick 
}: NavigationHeaderProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogoClick = () => {
    // Refresh the page to go back to home
    window.location.reload();
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-b border-gray-200/30 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl sticky top-0 z-50 shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20"
    >
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left Section - Back Button and Logo */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <AnimatePresence>
              {showBackButton && onBackClick && (
                <motion.div 
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onBackClick}
                    className="h-11 w-11 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-300"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 cursor-pointer"
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleLogoClick}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 2
                }}
                className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 dark:shadow-blue-500/40 overflow-hidden group"
              >
                <span className="text-white font-bold text-xl relative z-10 drop-shadow-lg">N</span>
                
                {/* Animated background layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Sparkle effects */}
                <motion.div
                  className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 1
                  }}
                />
                
                <motion.div
                  className="absolute bottom-1 left-1 w-1 h-1 bg-white/80 rounded-full"
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scale: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 1.5,
                    delay: 0.5
                  }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <div className="min-w-0">
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Need2Fix
                </motion.span>
                <motion.p 
                  className="text-xs text-gray-500 dark:text-gray-400 leading-none flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Sparkles className="w-2.5 h-2.5 text-yellow-500" />
                  Premium Network
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Theme Toggle */}
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative h-11 w-11 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:bg-gray-100/90 dark:hover:bg-gray-700/90 rounded-2xl shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/80 dark:hover:border-gray-600/80 transition-all duration-300 overflow-hidden group"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === "dark" ? 180 : 0,
                    scale: theme === "dark" ? 1.1 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring"
                  }}
                  className="relative z-10"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  ) : (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  )}
                </motion.div>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-pink-400/0 opacity-0 group-hover:opacity-100 rounded-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
