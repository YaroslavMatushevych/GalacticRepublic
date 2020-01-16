// modules
import React from 'react';
import { useHistory } from "react-router-dom";
// styles
import './ShipPage.module.css';

type Props = {
  text: string;
  onClick?: () => {};
}

const ShipPage = (props: any) => {
  const history = useHistory()
  const { model } = props.location.state

  return (
    <div>
      <h2 className="icon list arrow left"
          onClick={() => {
          history.goBack()
        }}>
        {model}
      </h2>
    </div>
  )
}

export default ShipPage;