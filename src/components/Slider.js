import Img1 from "../images/image-21.jpg";
import Img2 from "../images/image-22.jpg";
import Img3 from "../images/image-23.jpg";
import Img4 from "../images/image-24.jpg";
import Img5 from "../images/image-25.jpg";
import Img6 from "../images/image26.jpg";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {

  const style = {
    img: "w-full h-full object-cover "
  }
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" xl:h-[700px]  sm:h-[400px] md:h-[550px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]"
      >
        <SwiperSlide><img className={style.img} src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className={style.img} src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className={style.img} src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className={style.img} src={Img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className={style.img} src={Img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className={style.img} src={Img6} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
