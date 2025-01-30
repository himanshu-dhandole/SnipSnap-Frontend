import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import api from "../API/api.js"
 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate() ;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


  const registerHandler = async (e)=>{
    e.preventDefault();
    setLoader(true);


    try {
        await api.post(
          "api/auth/register",{name,email,password}
        );
        resetForm() ;
        navigate("/signin") ;
    } catch (error) {
      console.error(error) ;
    } finally{
      setLoader(false) ;
    }

  };

  const resetForm=()=>{
    setEmail("");
    setEmail("");
    setPassword("");

  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-gradient-to-br from-green-100 to-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-md w-full"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-mono text-gray-800">
            Create Your Account
          </h2>
        </motion.div>

        <form onSubmit={registerHandler} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.005 }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.005 }}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.005 }}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-green-600 text-white px-4 py-3 rounded-lg w-full hover:bg-green-700 transition-all duration-200 font-medium shadow-md"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </form>

        <motion.p 
          variants={itemVariants}
          className="mt-6 text-center text-sm sm:text-base"
        >
          Already have an account?{' '}
          <Link to="/signin">
            <motion.span
              whileHover={{ color: '#047857' }}
              className="text-green-600 font-semibold hover:underline"
            >
              Sign In
            </motion.span>
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SignUp;