import React from 'react'
import Button from '../Button/Button'

const Onstageheadline = ({ title, buttonText,color }) => {
  return (
    <div className='Onstageheadline'>
      <div className="Onstageheadlineleft">
        <h2 style={{ color: color }}>{title}</h2>
      </div>
      <div className="Onstageheadlineright">
        <Button text={buttonText} to="/" />   
      </div>
    </div>
  );  
};

export default Onstageheadline;
