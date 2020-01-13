// modules
import React, { memo } from 'react';
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
        <div key={ship.url} className={styles.shipItem} id={ship.url}>
          <h3>{ship.model}</h3>
          {/* <Link to={`/ship/${ship.url}`}> </Link> */}
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
