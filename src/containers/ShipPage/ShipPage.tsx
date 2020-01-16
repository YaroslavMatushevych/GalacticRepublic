// modules
import React from 'react';
import { useHistory } from "react-router-dom";
// components
import Button from '../../ui-library/components/Button';
// styles
import styles from './ShipPage.module.css';

type Props = {
  location: {
    state: {
      Name: string,
      Model: string,
      Manufacturer: string,
      CostInCredits: string,
      Length: string,
      MaxAtmospheringSpeed: string,
      Crew: string,
      CargoCapacity: string,
      Consumables: string,
      HyperdriveRating: string,
      MGLT: string,
      StarshipClass: string,
      Created: string,
      Edited: string,
    }
  };
}

const ShipPage: React.FC<Props> = ({ location }) => {
  const history = useHistory();
  const { Name } = location.state;

  const descriptionItems = Object.entries(location.state).map((descItem, index) => {
    return (
      <p className={styles.shipDescription} key={index}>
        {`${descItem[0]}: ${descItem[1]}`}
      </p>
    )
  });


  return (
    <div className={styles.shipItemContainer}>
      <h2 className={styles.heading} >
        StarShip {Name}
      </h2>

      <div className={styles.ShipItemCard}>
        {descriptionItems}
      </div>

      <Button
        text='Go Back'
        className={styles.goBackBtn}
        onClick={() => {
          history.goBack()
        }}
      />
    </div>
  )
}

export default ShipPage;