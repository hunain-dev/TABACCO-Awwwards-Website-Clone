import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation"; 

const Slider = () => {

    const obj = [
        {
          paragraph: "On behalf of the entire Difrenti Rutu team, I would like to thank you very much for the warmth, patience and especially the hospitality that we have experienced. What a great collaboration! The audience enjoyed it immensely - the reactions were very positive. Yesterday's team was really great, great, great! Everything was negotiable, professional and with a smile. It was a great experience to work with you.",
            name: "Claire",
            Date: "Different Route | may 2025",
        },
        {
             paragraph: "We had a great Christmas party at TOBACCO Theater! Britt helped us tremendously with the preparations, arranging all kinds of acts, thinking along and the top organization on the evening itself. The location is great, the staff flexible and spot-on and the food is delicious!! Many thanks for your fantastic help and organizing this great party!!",
            name: "FLOOR ",
            Date: "DECEMBER 2024.",

        },
            
            {
            paragraph: "On behalf of the entire Difrenti Rutu team, I would like to thank you very much for the warmth, patience and especially the hospitality that we have experienced. What a great collaboration! The audience enjoyed it immensely - the reactions were very positive. Yesterday's team was really great, great, great! Everything was negotiable, professional and with a smile. It was a great experience to work with you.",
            name: "HYLKE",
            Date: "AMSTERDAM VOCALS | MAY 2024",

        },
            {
            paragraph: "First of all, thank you for the exceptional hospitality yesterday during our event at your venue. We truly had an extraordinary experience. I would like to extend my gratitude to your entire team. A big bow to all of you.",
            name: "MAY",
            Date: "PROMO EVENT | NOVEMBER 2024",

        },
            {
            paragraph: "Beautiful location for an (office) party. The location offers a lot of possibilities and the food is exceptionally good for an event location. Even for 180 people, Tobacco theater knows how to put together a high-quality dinner, including good service and service.",
            name: "CILIA",
            Date: "FEBRUARY 2024",

        },
            {
            paragraph: "An event taken care of down to the last detail with great decoration and support with a smile! Normally I arrive at a location where the organization still has to dot the i's and cross the t's. That was not necessary at Tobacco... Very nice to experience that a location knows its trade well! Hopefully see you soon at a next event!",
            name: "JEROEN",
            Date: "NEXT LEVEL DMC | MAY 31, 2023",

        },
             {
            paragraph: "In one word: Top! Very centrally located; beautiful building with history and atmosphere. We were allowed to organize a beautiful business event with a delicious dinner in the beautifully decorated Theaterzaal. Friendly service, atmospheric lighting and music. Simply top!",
            name: "LISETTE",
            Date: "KALES AIRLINE SERVICES | 2022",

        },
    ]
  return (
    <div className="whatotherthinkoffslider">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
      
        modules={[Pagination]}
        className="mySwiper"
      >
         {
            obj.map((elem,index)=>{
                return(
        <SwiperSlide key={index} >
            <h4>{elem.paragraph}
            </h4> 
             <h5>{elem.name}
            </h5> 
                <h6>{elem.Date}
            </h6> 
            </SwiperSlide>

                )
            })
         }
      
      </Swiper>
    </div>
  );
};

export default Slider;
