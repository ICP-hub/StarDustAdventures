// MineCardTabSwitch.tsx
import React from 'react';
import { Tabs, Tab, TabPanel } from '../../ui/Tab';
import { MyCardsPanel, MissedCardsPanel } from './TabPanelMineCard';
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
  MyCardsData: CardData[];
  MissedCardsData: CardData[];
}

const MineCardTabSwitch: React.FC<MineCardTabSwitchProps> = ({ MyCardsData, MissedCardsData }) => {
  return (
    <div className="mine-card-container">
      <div className="mine-card-inner">
        <Tabs>
          <Tab index={0}><p>My Card</p></Tab>
          <Tab index={1}><p>Missed Card</p></Tab>

          <TabPanel index={0}>
            <MyCardsPanel MyCardsData={MyCardsData} />
          </TabPanel>

          <TabPanel index={1}>
            <MissedCardsPanel MissedCardsData={MissedCardsData} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MineCardTabSwitch;