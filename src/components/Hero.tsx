import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center px-4 sm:px-6 max-w-4xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Pure Cleaning Power – Made in Saudi Arabia
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-white mb-10"
        >
          Delivering reliable cleaning solutions for homes and industries across the Kingdom.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#products')}
            className="bg-[#006C35] text-white px-8 py-3 rounded-md font-medium hover:bg-[#005a2d] transition-colors duration-200"
          >
            Explore Products
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#demo')}
            className="bg-white text-[#006C35] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1.5,
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-white"
        >
          <ChevronDown size={36} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;