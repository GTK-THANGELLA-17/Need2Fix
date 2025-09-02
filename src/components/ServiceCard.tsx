
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const ServiceCard = ({ service, onClick }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: Math.random() * 0.3
      }}
      whileHover={{ 
        scale: 1.08, 
        y: -12,
        rotateY: 5,
        transition: { 
          duration: 0.3, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }
      }}
      whileTap={{ 
        scale: 0.95,
        rotateY: 0,
        transition: { duration: 0.15 }
      }}
      style={{ perspective: "1000px" }}
    >
      <Card 
        className="relative overflow-hidden cursor-pointer group h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl border-2 border-gray-200/60 dark:border-gray-700/60 shadow-2xl hover:shadow-3xl dark:hover:shadow-2xl transition-all duration-500 rounded-3xl hover:border-blue-300/80 dark:hover:border-blue-600/80"
        onClick={onClick}
      >
        {/* Premium Gradient Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40`}
          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 5,
            opacity: 0.3,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
        />
        
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
        
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60"
              style={{
                left: `${15 + i * 20}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Premium Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />
        
        <div className="p-5 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Enhanced Icon Container */}
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -8, 8, 0],
                transition: { 
                  duration: 0.8, 
                  ease: "easeInOut",
                  rotate: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                  }
                }
              }}
              className="relative group/icon"
            >
              <div
                className={`w-18 h-18 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden`}
              >
                <IconComponent className="w-9 h-9 text-white relative z-10 drop-shadow-lg" />
                
                {/* Multiple Rotating Rings */}
                <motion.div
                  className="absolute inset-1 rounded-3xl border-2 border-white/40"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                <motion.div
                  className="absolute inset-2 rounded-3xl border border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                {/* Enhanced Pulsing Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-white/30"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Inner Glow */}
                <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-white/20 to-transparent" />
              </div>
              
              {/* Enhanced Multi-layer Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                initial={{ scale: 0.8 }}
                whileHover={{ 
                  scale: 1.4,
                  transition: { duration: 0.4 }
                }}
              />
              
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                initial={{ scale: 0.6 }}
                whileHover={{ 
                  scale: 1.8,
                  transition: { duration: 0.6 }
                }}
              />
            </motion.div>
            
            {/* Enhanced Content */}
            <motion.div 
              className="space-y-2"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-base font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {service.name}
              </motion.h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 px-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom Accent Line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
        />
        
        {/* Enhanced Corner Sparkles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
            style={{ 
              right: `${8 + (i % 2) * 12}px`,
              top: `${8 + Math.floor(i / 2) * 12}px` 
            }}
            initial={{ scale: 0, rotate: 0 }}
            whileHover={{ 
              scale: 1, 
              rotate: 360,
              transition: { 
                delay: i * 0.1, 
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Premium Border Highlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), transparent)",
          }}
        />
      </Card>
    </motion.div>
  );
};
