import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const obj = [
  { img: "https://tobacco.nl/wp-content/uploads/2024/11/8-800x450.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/Uitgelicht-Juna-Horstmans-1-600x800.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/11/9-800x450.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/11/8-800x450.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/Uitgelicht-Juna-Horstmans-1-600x800.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/11/9-800x450.jpg" },

];

const Junaslider = () => {
  return (
    <div className='Junaslider'>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
      >
        {
          obj.map((elem, index) => (
            <SwiperSlide key={index} >
             <img src={elem.img} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Junaslider;
