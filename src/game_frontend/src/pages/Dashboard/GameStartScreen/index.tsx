import { useState } from 'react';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';

const GameStartScreen = () => {
  const [playerName, setPlayerName] = useState('');
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) {
      alert("Please Enter Your Name")
      return;
    }
        
    alert("your name is submitted")
    // Handle game start logic here
    console.log('Starting game with player:', playerName);
  };
  
  return (
    <div className="min-h-screen flex flex-col relative items-center">
      {/* Background image */}
      <div className="fixed inset-0 w-full h-full">
        <img
          src="./hero_bg.webp"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      
      {/* Main content */}
      <div className="relative w-full max-w-md z-10">
        <h1 className="text-4xl md:text-5xl text-white text-center mt-14 my-10 font-coin">
          Enter your Name
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <>
          <div className="p-20">
            {/* Pixelated input border */}
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full px-4 py-3 bg-blue-900/50 bg text-white placeholder-blue-300 border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-300"
              placeholder="Type your name..."
            />
          </div>
          </>
          
          <div className="flex justify-center">
            <Button
              type="submit"
            >
              Let's Play
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameStartScreen;