import React from 'react'

const ConferencesDinners = () => {
  const obj = [
    {
    h2:'Ideal for',
    h3:[
      'Congress',
      'Company party',  
      'Dinner',
      'Seminar',
      'Product presentation',
      'Award show',
      'Hybrid event',
      'Meeting',
      'Photoshoot',
      'Wedding'
    ]
    }
  ]
  return (
    <div className='ConferencesDinners'>
        <div className="ConferencesDinnersleft">
          <h2>Multi-day conferences, dinners, product launches, corporate parties, meetings, livestreams, photoshoots, exhibitions, workshops or award shows. Whatever you have in mind, at TOBACCO we will make it an unforgettable experience. The building has nine unique, very exclusive rooms. Each room is styled down to the smallest detail and can also be rented separately.

</h2>
        </div>

           {
            obj.map((item, index) => (
              <div key={index} className="ConferencesDinnersright">
                <h2>{item.h2}</h2>
                {item.h3.map((text, index) => (
                  <h3 key={index}>{text}</h3>
                ))}
              </div>
            ))}
       

      
    </div>
  )
}

export default ConferencesDinners
 