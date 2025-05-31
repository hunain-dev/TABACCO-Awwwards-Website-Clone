import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to, onClick, className = '' }) => {
const allClasses = `button ${className}`;

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {text}
    </button>
  );
};

export default Button;
