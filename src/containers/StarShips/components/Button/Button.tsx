import React, { memo } from 'react';
import './Button.css';

interface Props {
  text: string;
  onClick?: () => {};
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className='button' onClick={onClick} >
      {text}
    </button>
  )
}

export default Button;