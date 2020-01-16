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
                Name: ship.name,
                Model: ship.model,
                Manufacturer: ship.manufacturer,
                CostInCredits: ship.cost_in_credits,
                Length: ship.length,
                MaxAtmospheringSpeed: ship.max_atmosphering_speed,
                Crew: ship.crew,
                CargoCapacity: ship.cargo_capacity,
                Consumables: ship.consumables,
                HyperdriveRating: ship.hyperdrive_rating,
                MGLT: ship.MGLT,
                StarshipClass: ship.starship_class,
                Created: ship.created,
                Edited: ship.edited,
              }
            }}
          >
            <h3 className={styles.heading}>{ship.name}</h3>
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
