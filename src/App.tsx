import React from 'react';
import StarShips from './containers/StarShips';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      
      <StarShips />

    </div>
  );
}

export default App;
