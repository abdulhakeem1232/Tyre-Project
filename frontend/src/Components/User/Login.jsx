import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SideImage from '../../Assets/download (1).jpeg'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black p-8 rounded-2xl shadow-2xl w-full max-w-4xl mx-4"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Log in to your Account!
        </h1>
        <div className=" flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex items-center justify-center">
            <motion.img 
              src={SideImage}
              alt="Sign in illustration image"
              className="w-full max-w-sm rounded-lg "
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <form onSubmit={handleSubmit} className="flex-1 space-y-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </motion.div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md"
            >
              Log In
            </motion.button>
            <p className="text-center text-gray-600">
              Don't have an account? <a href="/signup" className="text-blue-600 hover:underline font-medium">Register here</a>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
