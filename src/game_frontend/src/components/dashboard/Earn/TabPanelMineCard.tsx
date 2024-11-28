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
  myCardsData: CardData[];
}

export const MyCardsPanel: React.FC<MyCardsPanelProps> = ({ myCardsData }) => {
  return (
    <div className="card-grid">
      {myCardsData.map((card) => (
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
  missedCardsData: CardData[];
}

export const MissedCardsPanel: React.FC<MissedCardsPanelProps> = ({ missedCardsData }) => {
  return (
    <div className="card-grid">
      {missedCardsData.map((card) => (
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