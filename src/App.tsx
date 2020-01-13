import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StarShips from './containers/StarShips';
import ShipPage from './containers/ShipPage';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.App}>

        <StarShips />

        <ShipPage />

      </div>
    </Router>
  );
}

export default App;
