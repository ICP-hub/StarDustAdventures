// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import SpaceTokensUi from "./SpaceTokensUi";


// const SpaceTokens: React.FC = () => {
//   const navigate = useNavigate();
//   const [clickCount, setClickCount] = useState(0);

//   interface TokenData {
//     tokens: number;
//     image: string;
//     title: string;
//     subtitle: string;
//   }


//   // Game Data
//   const adventureStartData: TokenData[] = [
//     {
//       tokens: 0,
//       image: "",
//       title: "Days of playing Star Dust adventure",
//       subtitle: "Click anywhere..."
//     }
//   ];

//   const rewardTokensData: TokenData[] = [
//     {
//       tokens: 0,
//       image: "/assets/ufo.svg",
//       title: "Tokens earned",
//       subtitle: "Click anywhere..."
//     }
//   ];

//   const [currentData, setCurrentData] = useState<TokenData[]>(adventureStartData);

//   const handleClick = () => {
//     setClickCount(prev => {
//       const newCount = prev + 1;

//       // Update display based on click count
//       switch(newCount) {
//         case 1:
//           setCurrentData(rewardTokensData);
//           break;
//         case 2:
//           navigate('/dashboard');
//           break;
//         default:
//           break;
//       }

//       return newCount;
//     });
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="min-h-screen flex items-center justify-center p-4"
//       style={{ backgroundImage: 'url("/Firefly-bg.webp")', backgroundSize: 'cover' }}
//     >
//       <SpaceTokensUi data={currentData} />
//     </div>
//   );
// };

// export default SpaceTokens;


import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdventureStartView from "./AdventureStartView";
import RewardTokensView from "./RewardTokensView";

// Define the shared interface
export interface TokenData {
  tokens: number;
  image: string;
  title: string;
  subtitle: string;
}

const SpaceTokens: React.FC = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  // Define the data for both views
  const adventureStartData: TokenData[] = [
    {
      tokens: 0,
      image: "",
      title: "Days of playing Star Dust adventure",
      subtitle: "Click anywhere..."
    }
  ];

  const rewardTokensData: TokenData[] = [
    {
      tokens: 0,
      image: "/assets/ufo.svg",
      title: "Tokens earned",
      subtitle: "Click anywhere..."
    }
  ];

  const handleClick = () => {     
    setClickCount(prev => prev + 1);          
    
    if (clickCount + 1 === 2) {       
      navigate('/dashboard');     
    }   
  };
  
  return (
    <div
      onClick={handleClick}
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/Firefly-bg.webp")',
        backgroundSize: 'cover'
      }}
    >
      {clickCount === 0 ? (
        <AdventureStartView data={adventureStartData} />
      ) : (
        <RewardTokensView data={rewardTokensData} />
      )}
    </div>
  );
};

export default SpaceTokens;