import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MySwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/300/200?random=1" alt="Slide 1" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200?random=2" alt="Slide 2" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200?random=3" alt="Slide 3" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/300/200?random=4" alt="Slide 4" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;
