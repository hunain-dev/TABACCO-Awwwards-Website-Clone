import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


const Junaslider = ({slider}) => {
  return (
    <div className='Junaslider'>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
      >
        {
          slider.map((elem, index) => (
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
