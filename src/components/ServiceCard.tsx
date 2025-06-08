
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const ServiceCard = ({ service, onClick }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        y: -6
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      <Card 
        className="relative overflow-hidden cursor-pointer group h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 rounded-2xl hover:border-blue-300/70 dark:hover:border-blue-600/70"
        onClick={onClick}
      >
        {/* Enhanced Gradient Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 dark:group-hover:opacity-25 transition-opacity duration-300`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="p-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-3">
            {/* Enhanced Icon Container */}
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -3, 3, 0]
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                <IconComponent className="w-7 h-7 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
            
            {/* Enhanced Content */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {service.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 px-1">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Accent Line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
        />
        
        {/* Corner Decoration */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        />
      </Card>
    </motion.div>
  );
};
