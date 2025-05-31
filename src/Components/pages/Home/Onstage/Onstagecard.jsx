import React from 'react'

const Onstagecard = ({ Carddata,color }) => {
  return (
    <div className='Onstagecard'>
        {
            Carddata.map((elem,index)=>{
                return(
                <div key={index} className="card">
            <div className="imagecon">
                <img src={elem.imagecon} alt="" />
            </div>
            <h3 style={{ color: color }}>{elem.h3}</h3>
        </div>
                )
            })
        }
       

      
    </div>
  )
}

export default Onstagecard
