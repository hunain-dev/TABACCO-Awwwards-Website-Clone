import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
const Impressivetext = () => {
  return (
    <div className='impressivetext'>
        <h4>An impressive gem in the heart of Amsterdam. Industrial, fresh, innovative and the love for detail and history oozes from the walls!
</h4>
 <Link className="Link"><Button text='Gallery' to='/Gallery' /></Link>

      
    </div>
  )
}

export default Impressivetext
