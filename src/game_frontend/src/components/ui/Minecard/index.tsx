import React from 'react';
import './index.css';


const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  profitPerHour,
  clickPerHour,
  level,
  cost,
  image
}) => {
  return (
    <div className="mine-card-wrapper">
      <div className="mine-card card-css">
        <div>
          <div className="mine-card-image-container">
            <img
              src={image}
              alt="Card-imgs"
              className="mine-card-image"
            />
          </div>
        </div>
        <div className="mine-card-content">
          <div className="mine-card-header">
            <h3 className="mine-card-title">{title}</h3>
            <p className="mine-card-subtitle">{subtitle}</p>
          </div>
          
          <div className="mine-card-stats">
            <div className="mine-card-stat-row">
              <span className="mine-card-stat-label">Profit /hr</span>
              <span className="mine-card-stat-value">
                <span className="mine-card-icon">⌛</span>
                +{profitPerHour}
              </span>
            </div>
            
            <div className="mine-card-stat-row">
              <span className="mine-card-stat-label">Click /hr</span>
              <span className="mine-card-stat-value">
                <span className="mine-card-icon">⚡</span>
                +{clickPerHour}
              </span>
            </div>
          </div>

          <div className="mine-card-divider-container">
            <div className="mine-card-divider"></div>
          </div>
          
          <div className="mine-card-footer">
            <span className="mine-card-level">Lvl. {level}</span>
            <div className="mine-card-vertical-divider"></div>
            <span className="mine-card-cost">
              <img 
                src="/assets/ufo.svg" 
                alt="ufo-icon" 
                className="mine-card-icon" 
              />
              {cost}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;