// MyCardsPanel.tsx
import React from 'react';
import Card from '../../ui/Minecard';


interface MyCardsPanelProps {
  MyCardsData: Cards[];
}

export const MyCardsPanel: React.FC<MyCardsPanelProps> = ({ MyCardsData }) => {
  return (
    <div className="card-grid">
      {MyCardsData.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          subtitle={card.subtitle}
          points={card.points}
          level={card.level}
          cost={card.cost}
          image={card.image}
          time={card.time}
        />
      ))}
    </div>
  );
};

// MissedCardsPanel.tsx
interface MissedCardsPanelProps {
  MissedCardsData: Cards[];
}

export const MissedCardsPanel: React.FC<MissedCardsPanelProps> = ({ MissedCardsData }) => {
  console.log("Mi ", MissedCardsData)
  return (
    <div className="card-grid">
      {MissedCardsData.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          subtitle={card.subtitle}
          points={card.points}
          level={card.level}
          cost={card.cost}
          image={card.image}
          time={card.time}
        />
      ))}
    </div>
  );
};