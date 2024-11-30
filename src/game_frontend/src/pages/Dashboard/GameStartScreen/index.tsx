import { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import './index.css';

const GameStartScreen = () => {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) {
      alert("Please Enter Your Name");
      return;
    }
    
    alert("your name is submitted");
    // Handle game-start logic here
    console.log('Starting game with player:', playerName);
  };

  return (
    <div className="game-container">
      <div className="game-content">
        <h1 className="game-title">
          Enter your Name
        </h1>
        
        <form onSubmit={handleSubmit} className="game-form">
          <div className="input-wrapper">
            <Input>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="game-input"
              />
            </Input>
          </div>
          
          <div className="button-wrapper">
            <Button type="submit">
              Let's Play
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameStartScreen;