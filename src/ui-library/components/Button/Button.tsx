import React from 'react';
import styles from './Button.module.css';
import cx from 'classnames';

interface Props {
  id?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ text, onClick, id, className, disabled, type }) => {
  return (
    <button 
      className={cx(
        styles.btn,
        className)} 
      id={id} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
      >
      {text}
    </button>
  )
}

export default Button;