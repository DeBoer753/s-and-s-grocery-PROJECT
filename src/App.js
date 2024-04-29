// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import OldSoulCab from './Cards/OldSoulCab';

// CSS
import './App.css';

// APP
const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          {/* WINE */}
          <Route index element={<Home />} />
          <Route path='/' element={<Home />}/>
          <Route path='/jlohr-seven-oaks-cabernet' element={<JLohrSevenOaks />}/>
          <Route path='/oldsoul-cab' element={<OldSoulCab />}/>
        
          {/* BEER */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;