import React from 'react';
import BgOverlay from '../../re-usables/BgOverlay';

const BackgroundSection = ({ image }) => {
  return (
    <div className="background-section" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <img src={image} alt="background" style={{ display: 'none' }} fetchpriority="high" />
      <BgOverlay />
    </div>
  );
};

export default BackgroundSection;
