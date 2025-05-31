import React from 'react'
import man from '/src/assets/imageandvideos/MAN.svg'
import { Link } from 'react-router-dom'


const Topmen = () => {
  return  (
    <div className='Topmen'>
      <Link to="/"> <img src={man} alt="" /></Link> 
      
    </div>
  )
}

export default Topmen
 