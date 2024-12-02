import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TokenData {
  tokens: number;
  image: string;
  title: string;
  subtitle: string;
}

const SpaceTokens: React.FC = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  
  const initialData: TokenData[] = [
    {
      tokens: 0,
      image: "",
      title: "Days of playing Star Dust adventure",
      subtitle: "Click anywhere..."
    }
  ];

  const nextData: TokenData[] = [
    {
      tokens: 0,
      image: "👾",
      title: "Tokens earned",
      subtitle: "Click anywhere..."
    }
  ];

  const [currentData, setCurrentData] = useState<TokenData[]>(initialData);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount === 0) {
      setCurrentData(nextData);
      setHasClicked(true);
    } else if (clickCount === 1) {
      // Navigate to Dashboard on second click
      navigate('/dashboard');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="relative">
        {/* Main content */}
        <div className="relative">
          {currentData.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex items-center justify-center mb-10 space-x-2">
                <span className="text-white text-8xl font-coin ">{item.tokens}</span>
                {item.image && (
                  <span className="text-4xl">{item.image}</span>
                )}
              </div>
              <div className="space-y-2">
                <h2 className="text-white w-64 text-2xl my-24 font-coin">
                  {item.title}
                </h2>
                <p className="text-white text-sm font-coin opacity-80">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaceTokens;