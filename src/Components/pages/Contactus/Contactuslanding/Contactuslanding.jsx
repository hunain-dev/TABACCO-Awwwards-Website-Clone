import React from 'react'
import Vactorimage from "/src/assets/imageandvideos/manvactor.png"
const Contactuslanding = () => {
  const obj = [
        {
            Contact: "Contact us",
            info: "31 020 330 06 70 infotobacco.nl",
            Address: "Address",
            Location: "KD Amsterdam"
        }
    ];
  return (
    <div className='Contactuslanding'>

{
    obj.map((elem,index)=>{
        return(
<div key={index} className="Contactuslandingleft">
      <h5>{elem.Contact}</h5>
      <h4>{elem.info}</h4>
      <h5>{elem.Address}</h5>
      <h2>{elem.Location}</h2>
</div>
  
        )
    })
}
<div className="Contactuslandingright">
  <div className="image-container">
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className="map-mask"
    >
      <defs>
        <mask id="man-mask">
          <image
            xlinkHref="/src/assets/imageandvideos/manvactor.svg"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </mask>
      </defs>
      <foreignObject
        x="0"
        y="0"
        width="100%"
        height="100%"
        mask="url(#man-mask)"
      >
        <iframe
          src="https://maps.google.com/maps?q=Amsterdam&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
        ></iframe>
      </foreignObject>
    </svg>
  </div>
</div>


    </div>
  )
}

export default Contactuslanding
