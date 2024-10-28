import React, { useEffect, useState } from 'react';

const AdditionalText = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`additional-text-section ${isDesktop ? 'desktop-view' : 'mobile-view'}`}>
      <h3 className="additional-text-title">Overview of Star Dust Adventures</h3>
      <p className="additional-text-description">
        A Tap-to-Earn Game Combining Exploration and Blockchain
      </p>
    </div>
  );
};

export default AdditionalText;
