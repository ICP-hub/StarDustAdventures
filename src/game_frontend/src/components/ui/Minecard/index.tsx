import React, { useState } from 'react';
import './index.css';

// TypeScript interfaces
interface CardDataType {
  id: number;
  title: string;
  subtitle: string;
  profitPerHour: number;
  clickPerHour: number;
  level: number;
  cost: number;
}

interface CardProps extends Omit<CardDataType, 'id'> {
  image?: string;
}

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// Card data structure
const cardData: CardDataType[] = [
  {
    id: 1,
    title: "Market Manipulation",
    subtitle: "You control the price",
    profitPerHour: 0.3,
    clickPerHour: 45,
    level: 0,
    cost: 2,
  },
  {
    id: 2,
    title: "Market Manipulation",
    subtitle: "You control the price",
    profitPerHour: 0.3,
    clickPerHour: 45,
    level: 0,
    cost: 2,
  },
  {
    id: 3,
    title: "Market Manipulation",
    subtitle: "You control the price",
    profitPerHour: 0.3,
    clickPerHour: 45,
    level: 0,
    cost: 2,
  },
  // ... other card data 
];

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
      <div className="mine-card  card-css">
        <div>
          <div className="mine-card-image-container">
            <img 
              src={image || 'https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_640.png'}
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
            <span className="mine-card-level">Lvl {level}</span>
            <div className="mine-card-vertical-divider"></div>
            <span className="mine-card-cost">
              <span className="mine-card-icon">ic</span>
              {cost}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};



const MineCardsPage: React.FC = () => {


  return (
    
          <div className="mine-cards-grid">
            {cardData.map((card) => (
              <Card 
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                profitPerHour={card.profitPerHour}
                clickPerHour={card.clickPerHour}
                level={card.level}
                cost={card.cost}
              />
            ))}
          </div>
        
  );
};

export default MineCardsPage;