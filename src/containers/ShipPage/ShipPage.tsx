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
      name: string,
      model: string,
      manufacturer: string,
      cost_in_credits: string,
      length: string,
      max_atmosphering_speed: string,
      crew: string,
      cargo_capacity: string,
      consumables: string,
      hyperdrive_rating: string,
      MGLT: string,
      starship_class: string,
      created: string,
      edited: string,
    }
  };
}

const ShipPage: React.FC<Props> = ({ location }) => {
  const history = useHistory();
  const { name } = location.state;

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
        {name}
      </h2>

      {descriptionItems}

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