import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StarShips from './containers/StarShips';
import ShipPage from './containers/ShipPage';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.App}>

        <Switch>
          <Route exact path="/" component={StarShips} />

          <Route path="/shipPage" component={ShipPage} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
