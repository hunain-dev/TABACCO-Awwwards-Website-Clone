import React from 'react'
import Contactuslanding from './Contactuslanding/Contactuslanding'
import FAQS from './Contactuslanding/FAQS/FAQS'
import Loader from '../../Loader/Loader'
const Contactus = () => {
  return (
    <div className='Contactus'>
      <Loader/>
      <Contactuslanding/>
      <FAQS/>
    </div>
  )
}

export default Contactus
