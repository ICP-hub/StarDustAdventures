import React from 'react';
import Button from '../../re-usables/Button';
import BackgroundSection from './HeroBackground';
import TextContent from './HeroTitleSection';
import AstronautAnimation from './HeroVisual';
import AdditionalText from './HeroDescription';
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
