
import { motion } from "framer-motion";
import { Moon, Sun, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, y: 0, backdropFilter: "blur(24px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-b border-gray-200/40 dark:border-gray-700/40 bg-white/85 dark:bg-gray-900/85 backdrop-blur-3xl sticky top-0 z-50 shadow-2xl shadow-gray-900/5 dark:shadow-gray-900/30"
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-4 cursor-pointer group"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 3
            }}
            className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 dark:shadow-blue-500/50 overflow-hidden"
          >
            <span className="text-white font-bold text-xl relative z-10 drop-shadow-lg">S</span>
            
            {/* Premium animated background layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className="absolute inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl opacity-80"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Enhanced sparkle effects */}
            <motion.div
              className="absolute top-1.5 right-1.5 w-2 h-2 bg-white rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.3, 1.5, 0.3],
                rotate: 360
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                repeatDelay: 1.5,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-white/90 rounded-full"
              animate={{ 
                opacity: [0, 0.9, 0],
                scale: [0.2, 1.3, 0.2]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2,
                delay: 1
              }}
            />
            
            {/* Premium glow effect */}
            <motion.div
              className="absolute inset-0 bg-white/25 rounded-2xl"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.5, 0.25]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="flex flex-col">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              ServiceHub
            </motion.span>
            <motion.div 
              className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Zap className="w-2.5 h-2.5 text-yellow-500" />
              <span>Premium Services</span>
              <Sparkles className="w-2.5 h-2.5 text-purple-500" />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex items-center space-x-4">
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative h-12 w-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl hover:bg-gray-100/95 dark:hover:bg-gray-700/95 rounded-2xl shadow-2xl border-2 border-gray-200/60 dark:border-gray-700/60 hover:border-gray-300/80 dark:hover:border-gray-600/80 transition-all duration-300 overflow-hidden group"
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: theme === "dark" ? 180 : 0,
                  scale: theme === "dark" ? 1.1 : 1
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 200
                }}
                className="relative z-10"
              >
                {theme === "light" ? (
                  <Moon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Sun className="h-6 w-6 text-yellow-500" />
                )}
              </motion.div>
              
              {/* Premium animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/30 to-pink-400/0 opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.4, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                animate={{ 
                  scale: [1, 1.5],
                  opacity: [0.3, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};
