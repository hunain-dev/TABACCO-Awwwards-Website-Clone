import React from 'react'
import Loader from '../../../Loader/Loader'
import HallRentalLaning from '../../HallRental/HallRentalLaning/HallRentalLaning'
import Textarea from '../../Home/Featured/FeaturedJunaHorstman/textarea'
import Junaslider from '../../Home/Featured/FeaturedJunaHorstman/Junaslider'
const Stichting = () => {
  return (
    <div className='Stichting'>
      <Loader/>

          <HallRentalLaning
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/rich_content.jpg"
        title="Ode to talent"
        Heading={
          <>
           Founding Couple you For

          </>
        }
      />

      <Textarea />
      <Junaslider />
    </div>
  )
}

export default Stichting
