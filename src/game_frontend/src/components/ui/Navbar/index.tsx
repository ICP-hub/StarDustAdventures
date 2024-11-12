import React from 'react';
import './Navbar.css';

interface NavbarProps {
  profitPerHour?: number;
}

const Navbar: React.FC<NavbarProps> = ({ profitPerHour = 0.3 }) => {
  return (
    <div>
      <div className="top-nav-bar">
        <div className="nav-content">
          <div className="nav-icon">
            <img 
            src='/assets/images/wallets/ii.png'
            alt='icp-png'
            loading="lazy"
            />
          </div>
          
          {/* Separator */}
          <div className="nav-separator"></div>
          
          <div className="nav-stats-container">
            <div className="profit-stats">
              <span className="profit-label">Profit per hour</span>
              <span className="profit-value">
                <img 
                  src="/assets/ufo.svg" 
                  alt="ufo-icon" 
                  className="ufo-icon" 
                />
                <span className="profit-amount">+{profitPerHour}</span>
              </span>
            </div>
            <div className="character-icon">
              <img 
                src="/assets/character.svg" 
                alt="pixel character" 
                className="character-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;