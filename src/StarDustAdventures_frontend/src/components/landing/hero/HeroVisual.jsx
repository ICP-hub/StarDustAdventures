import React from 'react';
import { motion } from 'framer-motion';

const AstronautAnimation = () => {
  return (
    <motion.img
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 3, type: 'tween' }}
      src="/assets/images/astronaut.webp"
      alt="falling astronaut"
      className="astronaut-animation"
      fetchpriority="high"
    />
  );
};

export default AstronautAnimation;
