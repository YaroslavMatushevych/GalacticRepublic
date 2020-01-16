// modules
import React, { memo } from 'react';
import { Link } from "react-router-dom";
// styles
import styles from './ShipItems.module.css';

interface Props {
  data: {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    created: string;
    edited: string;
    url: string;
  }[];
}

const ShipItems: React.FC<Props> = ({ data }) => {
  let starshipsCollection;
  if (data !== undefined) {

    starshipsCollection = data.map((ship, index) => {
      return (
        <div key={index} className={styles.shipItemContainer}>
          <Link
            to={{
              pathname: "/shipPage",
              state: {
                name: ship.name,
                model: ship.model,
                manufacturer: ship.manufacturer,
                cost_in_credits: ship.cost_in_credits,
                length: ship.length,
                max_atmosphering_speed: ship.max_atmosphering_speed,
                crew: ship.crew,
                cargo_capacity: ship.cargo_capacity,
                consumables: ship.consumables,
                hyperdrive_rating: ship.hyperdrive_rating,
                MGLT: ship.MGLT,
                starship_class: ship.starship_class,
                created: ship.created,
                edited: ship.edited,
              }
            }}
          >
            <h3 className={styles.heading}>{ship.model}</h3>
          </Link>
        </div>
      )
    });
  }

  return (
    <>
      {starshipsCollection}
    </>
  );
};

export default memo(ShipItems);
