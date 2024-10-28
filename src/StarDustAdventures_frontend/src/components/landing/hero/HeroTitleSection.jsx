import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../re-usables/Button';

const TextContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 2, type: 'tween' }}
      className="hero-text-content"
    >
      <h1 className="hero-title-main">Star Dust</h1>
      <h1 className="hero-title-sub">Adventures</h1>
      <p className='hero-description'>
        A Space Exploration Tap-to-Earn Game Powered By Crypto
      </p>
      <Button className='play-button'>PLAY</Button>
    </motion.div>
  );
};

export default TextContent;
