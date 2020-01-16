// modules
import React, { memo } from 'react';
import { Link } from "react-router-dom";
// styles
import styles from './ShipItems.module.css';

interface Props {
  data: {
    name: string;
    model: string;
    url: string;
  }[];
}

const ShipItems: React.FC<Props> = ({ data }) => {
  let starshipsCollection;
  if (data !== undefined) {

    starshipsCollection = data.map(ship => {
      return (
        <Link
          to={{
            pathname: "/shipPage",
            state: { model: ship.model }
          }}>
          <div key={ship.url} className={styles.shipItem} id={ship.url}>
            <h3>{ship.model}</h3>
          </div>
        </Link>
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
