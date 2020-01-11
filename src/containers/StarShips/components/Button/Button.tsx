import React from 'react';
import './Button.css';

interface Props {
  id?: string;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ text, onClick, id }) => {
  return (
    <button className='button' id={id} onClick={onClick} >
      {text}
    </button>
  )
}

export default Button;