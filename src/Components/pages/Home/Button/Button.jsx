import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to, onClick, className = '', bgColor, btncolor, buttonLink }) => {
  const allClasses = `button ${className}`;

  // If it's an internal route (React Router)
  if (to) {
    return (
      <Link to={to} className={allClasses} style={{ backgroundColor: bgColor, color: btncolor }}>
        {text}
      </Link>
    );
  }

  // If it's an external link
  if (buttonLink) {
    return (
      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className={allClasses}
        style={{ backgroundColor: bgColor, color: btncolor, textDecoration: "none" }}
      >
        {text}
      </a>
    );
  }

  // Default button (e.g. for handling onClick)
  return (
    <button
      onClick={onClick}
      className={allClasses}
      style={{ backgroundColor: bgColor, color: btncolor }}
    >
      {text}
    </button>
  );
};

export default Button;
