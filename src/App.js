// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import JLohrLosOsos from './Cards/JLohrLosOsos'
import JLohrSyrah from './Cards/JLohrSyrah';
import OldSoulCab from './Cards/OldSoulCab';
import OldSoulZin from './Cards/OldSoulZin';
import OldSoulPetiteSyrah from './Cards/OldSoulPetiteSyrah';
import OzvZin from './Cards/OzvZin';
import MaggioPinot from './Cards/MaggioPinot';
import MaggioZin from './Cards/MaggioZin';
import LaPlayaCab from './Cards/LaPlayaCab';
import LaPlayaMerlot from './Cards/LaPlayaMerlot';
import LaPlayaSB from './Cards/LaPlayaSB';
import EyzaguirreSyrah from './Cards/EyzaguirreSyrah';
import EyzaguirreMerlot from './Cards/EyzaguirreMerlot';
import PoppyCab from './Cards/PoppyCab';
import PoppyPinot from './Cards/PoppyPinot';
import CampugetRose from './Cards/CampugetRose';
import BetterHalfSB from './Cards/BetterHalfSB';
import BetterHalfPinot from './Cards/BetterHalfPinot';
import JulesTaylorSB from './Cards/JulesTaylorSB';



// CSS
import './App.css';

// APP
const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          {/* WINE */}
          {/* <Route index element={<Home />} />
          <Route path='/' element={<Home />}/>
          <Route path='/jlohr-seven-oaks-cabernet' element={<JLohrSevenOaks />}/>
          <Route path='/jlohr-los-osos' element={<JLohrLosOsos />}/>
          <Route path='/jlohr-syrah' element={<JLohrSyrah />}/>
          <Route path='/oldsoul-cab' element={<OldSoulCab />}/>
          <Route path='/oldsoul-zin' element={<OldSoulZin />}/>
          <Route path='/oldsoul-petite-syrah' element={<OldSoulPetiteSyrah />}/>
          <Route path='/ozv-zin' element={<OzvZin />}/>
          <Route path='/maggio-pinot' element={<MaggioPinot />}/>
          <Route path='/maggio-zin' element={<MaggioZin />}/>
          <Route path='/laplaya-cab' element={<LaPlayaCab />}/>
          <Route path='/laplaya-merlot' element={<LaPlayaMerlot />}/>
          <Route path='/laplaya-cab' element={<LaPlayaCab />}/>
          <Route path='/laplaya-sb' element={<LaPlayaSB />}/>
          <Route path='/eyzaguirre-syrah' element={<EyzaguirreSyrah />}/>
          <Route path='/eyzaguirre-merlot' element={<EyzaguirreMerlot />}/>
          <Route path='/poppy-cab' element={<PoppyCab />}/>
          <Route path='/poppy-pinot' element={<PoppyPinot />}/>
          <Route path='/campuget-rose' element={<CampugetRose />}/>
          <Route path='/betterhalf-sb' element={<BetterHalfSB />}/>
          <Route path='/betterhalf-pinot' element={<BetterHalfPinot />}/>
          <Route path='/julestaylor-sb' element={<JulesTaylorSB />}/> */}
        
          {/* BEER */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;