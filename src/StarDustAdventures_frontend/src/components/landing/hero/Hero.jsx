import React from 'react';
import Button from '../../re-usables/Button';
import BackgroundSection from './BackgroundSection';
import TextContent from './TextContent';
import AstronautAnimation from './AstronautAnimation';
import AdditionalText from './AdditionalText';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero-section'>
      <BackgroundSection image="hero_bg.webp" />
      <TextContent />
      <AstronautAnimation />
      <AdditionalText />
    </div>
  );
};

export default Hero;
