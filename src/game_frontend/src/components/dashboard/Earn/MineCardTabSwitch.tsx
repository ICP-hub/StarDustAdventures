import React from 'react';
import Card from '../../ui/Minecard';
import { Tabs, Tab, TabPanel } from '../../ui/Tab';
import './index.css';

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

interface MineCardTabSwitchProps {
  myCardsData: CardData[];
  missedCardsData: CardData[];
}

const MineCardTabSwitch: React.FC<MineCardTabSwitchProps> = ({ myCardsData, missedCardsData }) => {
  return (
    <div className="mine-card-container">
      <div className="mine-card-inner">
        <Tabs>
          <Tab index={0}><p>My Card</p></Tab>
          <Tab index={1}><p>Missed Card</p></Tab>

          <TabPanel index={0}>
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
          </TabPanel>

          <TabPanel index={1}>
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
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MineCardTabSwitch;