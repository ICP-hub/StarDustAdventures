import React from 'react';
import SpaceTokensUi from "./SpaceTokensUi";

interface TokenData {
  tokens: number;
  image: string;
  title: string;
  subtitle: string;
}

interface AdventureStartViewProps {
  data: TokenData[];
}

const AdventureStartView: React.FC<AdventureStartViewProps> = ({ data }) => {
  return <SpaceTokensUi data={data} />;
};

export default AdventureStartView;