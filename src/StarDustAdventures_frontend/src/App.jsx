import { useState } from 'react';
import { StarDustAdventures_backend } from 'declarations/StarDustAdventures_backend';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {

  return (
    <Router className='app'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
