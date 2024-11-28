// MyCardsPanel.tsx
import React from 'react';
import Card from '../../ui/Minecard';

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  profitPerHour: number;
  clickPerHour: number;
  level: number;
  cost: number;
  image: string;
}

interface MyCardsPanelProps {
  MyCardsData: CardData[];
}

export const MyCardsPanel: React.FC<MyCardsPanelProps> = ({ MyCardsData }) => {
  return (
    <div className="card-grid">
      {MyCardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          profitPerHour={card.profitPerHour}
          clickPerHour={card.clickPerHour}
          level={card.level}
          cost={card.cost}
          image={card.image}
        />
      ))}
    </div>
  );
};

// MissedCardsPanel.tsx
interface MissedCardsPanelProps {
  MissedCardsData: CardData[];
}

export const MissedCardsPanel: React.FC<MissedCardsPanelProps> = ({ MissedCardsData }) => {
  return (
    <div className="card-grid">
      {MissedCardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          profitPerHour={card.profitPerHour}
          clickPerHour={card.clickPerHour}
          level={card.level}
          cost={card.cost}
          image={card.image}
        />
      ))}
    </div>
  );
};