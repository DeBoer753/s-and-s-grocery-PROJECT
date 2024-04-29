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

        {/* BEER */}
        
    </div>
  );
};

export default Home;
