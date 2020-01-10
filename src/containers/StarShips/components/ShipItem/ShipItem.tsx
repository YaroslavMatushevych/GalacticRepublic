import React, { memo } from 'react';
import './ShipItem.css';

interface Props {
  data: {
    name: string;
    model: string;
    url: string;
  }[];
}

const ShipItem: React.FC<Props> = ({ data }) => {

  let starshipsCollection;
  if (data !== undefined) {
    starshipsCollection = data.map(ship => {
      return (
        <div key={ship.url} className="card-item" id={ship.name}>
          <h3>{ship.model}</h3>
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

export default memo(ShipItem);
