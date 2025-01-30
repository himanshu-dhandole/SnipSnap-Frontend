import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const demoCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-br from-emerald-700 via-green-400 to-emerald-500 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side content */}
        <div className="lg:w-1/2 text-white space-y-8 max-w-xl mx-auto lg:mx-0">
          <motion.h1 
            variants={itemVariants}
            className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Short links,
            <br />
            big impact
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed"
          >
            Transform your long URLs into memorable, powerful links. Our platform makes sharing easier than ever, with powerful analytics to track every click.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link to="/signup">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right side demo card */}
        <motion.div 
          className="lg:w-1/2 mt-16 lg:mt-0 w-full max-w-md mx-auto lg:mx-0 lg:ml-8"
          variants={demoCardVariants}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-2xl p-6 sm:p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-500"
              ></motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-yellow-500"
              ></motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-green-500"
              ></motion.div>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gray-100 rounded-lg p-4 sm:p-5"
              >
                <p className="text-gray-600 text-sm mb-2">Original URL</p>
                <p className="text-gray-800 truncate font-mono text-sm sm:text-base">
                  https://www.example.com/very/long/url/that/needs/shortening
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-emerald-100 rounded-lg p-4 sm:p-5"
              >
                <p className="text-emerald-600 text-sm mb-2">Shortened URL</p>
                <p className="text-emerald-800 font-mono text-sm sm:text-base">short.ly/x8Yd2</p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-100 rounded-lg p-4 sm:p-5"
                >
                  <p className="text-gray-600 text-sm">Clicks</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">1,234</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-100 rounded-lg p-4 sm:p-5"
                >
                  <p className="text-gray-600 text-sm">Created</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">2d ago</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;