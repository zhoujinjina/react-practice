import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './S.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const S = () => {
  return (
    <>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
        <SwiperSlide><img src='https://pic2.zhimg.com/80/v2-4dcdc8400b108a3b4f75747bcf74b1f1_1440w.webp'/></SwiperSlide>
        <SwiperSlide><img src='https://pic3.zhimg.com/80/v2-0ec6c812ce89f8d761a26849d09053de_1440w.webp'/></SwiperSlide>
        <SwiperSlide><img src='https://pic2.zhimg.com/80/v2-7a990e7b7daeb4ec3083a8c872af1de9_1440w.webp'/></SwiperSlide>
        <SwiperSlide><img src='https://pic3.zhimg.com/80/v2-6e5bb49d85c5de8c68baec08f1cff656_1440w.webp'/></SwiperSlide>
        <SwiperSlide><img src='https://pic4.zhimg.com/80/v2-dcc5f9767e322322a7ec960ace16ee2b_1440w.webp'/></SwiperSlide>
        <SwiperSlide><img src='https://pic2.zhimg.com/80/v2-b2d545bf546d66b323b392f77dc39739_1440w.webp'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default S
