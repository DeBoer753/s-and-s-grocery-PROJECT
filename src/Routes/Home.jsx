// REACT 
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// CSS
import styles from './Home.module.css';

// HOME
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>S and S Grocery</h1>
        {/* WINE */}
        <Link to='/jlohr-seven-oaks-cabernet'>J. Lohr Seven Oaks Cabernet</Link>
        <Link to='/jlohr-los-osos'>J. Lohr Los Osos Merlot</Link>
        <Link to='/jlohr-syrah'>J. Lohr South Ridge Syrah</Link>
        <Link to='/oldsoul-cab'>Old Soul Cab</Link>
        <Link to='/oldsoul-zin'>Old Soul Zin</Link>
        <Link to='/oldsoul-petite-syrah'>Old Soul Petite Syrah</Link>
        <Link to='/ozv-zin'>Ozv Zinfandel</Link>
        <Link to='/maggio-pinot'>Maggio Pinot</Link>
        <Link to='/maggio-zin'>Maggio Zin</Link>
        <Link to='/laplaya-cab'>La Playa Cab</Link>
        <Link to='/laplaya-merlot'>La Playa Merlot</Link>
        <Link to='/laplaya-sb'>La Playa Sauv Blanc</Link>
        <Link to='/eyzaguirre-syrah'>Eyzaguirre Syrah</Link>
        <Link to='/eyzaguirre-merlot'>Eyzaguirre Merlot</Link>
        <Link to='/poppy-cab'>Poppy Cab</Link>
        <Link to='/poppy-pinot'>Poppy Pinot</Link>
        <Link to='/campuget-rose'>Campuget Rose</Link>
        <Link to='/betterhalf-sb'>Better Half SB</Link>
        <Link to='/betterhalf-pinot'>Better Half Pinot</Link>
        <Link to='/julestaylor-sb'>Jules Taylor SB</Link>

        {/* BEER */}
        
    </div>
  );
};

export default Home;

/*

wine cards to add 
la playa cab
la playa merlot
old soul petite sirah 
old soul cab 
old soul zin
j lohr seven oaks 
j lohr pure paso 
poppy cab 
poppy pinot 


COLD BOX - WHAT WILL THE STICKERS LOOK LIKE??
la sb
*/