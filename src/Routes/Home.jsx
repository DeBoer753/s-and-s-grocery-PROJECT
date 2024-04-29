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
        <Link to='/oldsoul-cab'>Old Soul Cab</Link>

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