import React from 'react';
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <motion.header 
      className="header-bar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
    >
      <div className="header-content">
        <motion.div 
          className="header-logo-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img src="/img/Preview.png" alt="To Do List" style={{ height: '50px' }} />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
