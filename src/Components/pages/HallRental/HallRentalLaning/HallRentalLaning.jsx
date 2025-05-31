import React from 'react'
import TakeTabbaco from '../../Home/TakeTabbaco/TakeTabbaco'
import Button from '../../Home/Button/Button'
const HallRentalLaning = ({ imageUrl, title, Heading, showButton, textColor }) => {
  return (
    <div className='HallRentalLaning'>
        <div className="HallRentalLaningtext">
                  <h3 style={{ color: textColor }}>{title}</h3>
        <h2 style={{ color: textColor }}>{Heading}</h2>
        {showButton && <Button text="View Tabbaco in 3d" to="https://my.3dvirtualexperience.nl/tobacco_theater/index.html" />}

        </div>
        <div className="HallRentalLaningimage">
       <TakeTabbaco 
        imageUrl={imageUrl} 
          showButton={false}

      />
        </div>
    </div>
  )
}

export default HallRentalLaning
