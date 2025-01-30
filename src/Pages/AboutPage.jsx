import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-green-400 to-emerald-500 py-16 sm:py-20 lg:py-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20"
      >
        {/* Left side content */}
        <div className="lg:w-1/2 text-white space-y-8 max-w-xl mx-auto lg:mx-0">
          <motion.div variants={itemVariants}>
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About SnipSnap
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
              At SnipSnap, we believe that sharing should be simple and effective. Our URL shortening service transforms long links into concise, memorable URLs, making it easier for you to share content across platforms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              Our mission is to empower users with powerful tools to manage their links effectively. With advanced analytics and security features, we ensure that your data is safe while providing insights into your link performance.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Security First</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              We utilize Spring Security and JWT tokens to protect your data and ensure secure transactions. Your privacy is our priority.
            </p>
          </motion.div>
        </div>

        {/* Right side images and features */}
        <div className="lg:w-1/2 space-y-6 w-full max-w-xl mx-auto lg:mx-0">
          {/* Image 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center transform transition-all duration-200 hover:shadow-2xl"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://cdn4.iconfinder.com/data/icons/business-filled-outline-6/64/sharing-collaboration-teamwork-organization-employer-512.png"
              alt="Simple Sharing"
              className="rounded-md mb-4 w-16 h-16 object-contain"
            />
            <h3 className="font-bold text-lg sm:text-xl mb-2">Simple Sharing</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Easily share your shortened links across social media platforms.
            </p>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center transform transition-all duration-200 hover:shadow-2xl"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://cdn-icons-png.flaticon.com/512/235/235183.png"
              alt="Powerful Analytics"
              className="rounded-md mb-4 w-16 h-16 object-contain"
            />
            <h3 className="font-bold text-lg sm:text-xl mb-2">Powerful Analytics</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Track clicks, user engagement, and link performance with our analytics dashboard.
            </p>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center transform transition-all duration-200 hover:shadow-2xl"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://static.vecteezy.com/system/resources/previews/013/394/752/original/3d-internet-padlock-cyber-security-icon-illustration-rendering-png.png"
              alt="Secure Links"
              className="rounded-md mb-4 w-16 h-16 object-contain"
            />
            <h3 className="font-bold text-lg sm:text-xl mb-2">Secure Links</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              With Spring Security and JWT tokens, your data is protected at all times.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;