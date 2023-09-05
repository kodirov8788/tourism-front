import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import paketlar_img1 from "./Paketlar_img/paketlar_img1.jpg";
import paketlar_img2 from "./Paketlar_img/paketlar_img2.jpg";
import paketlar_img3 from "./Paketlar_img/paketlar_img3.jpg";
import paketlar_img4 from "./Paketlar_img/paketlar_img4.jpg";
import paketlar_img5 from "./Paketlar_img/paketlar_img5.jpg";
import paketlar_img6 from "./Paketlar_img/paketlar_img6.jpg";
import paketlar_img7 from "./Paketlar_img/paketlar_img7.jpg";
import paketlar_img8 from "./Paketlar_img/paketlar_img8.jpg";
import paketlar_img9 from "./Paketlar_img/paketlar_img9.jpg";
import paketlar_img10 from "./Paketlar_img/paketlar_img10.jpg";
import paketlar_img11 from "./Paketlar_img/paketlar_img11.jpg";
import paketlar_img12 from "./Paketlar_img/paketlar_img12.jpg";
import paketlar_img13 from "./Paketlar_img/paketlar_img13.jpg";
import paketlar_img14 from "./Paketlar_img/paketlar_img14.jpg";
import paketlar_img15 from "./Paketlar_img/paketlar_img15.jpg";
import paketlar_img16 from "./Paketlar_img/paketlar_img16.jpeg";
import paketlar_img17 from "./Paketlar_img/paketlar_img17.jpg";
import paketlar_img18 from "./Paketlar_img/paketlar_img18.jpg";
import paketlar_img19 from "./Paketlar_img/paketlar_img19.jpg";
import paketlar_img20 from "./Paketlar_img/paketlar_img20.jpeg";
import paketlar_img21 from "./Paketlar_img/paketlar_img21.jpg";
import paketlar_img22 from "./Paketlar_img/paketlar_img22.jpg";
import paketlar_img23 from "./Paketlar_img/paketlar_img23.jpg";
import { Paketlar_data } from "../../static_data";
import { Link } from "react-router-dom";

function Paketlar() {
  return (
    <div className="bg-[#D5E4D9] ">
      {/* Main qismi */}
      <div className="w-[100%] h-[340px] relative flex items-center justify-center font-sans">
        <img
          className="w-[100%] h-[100%] object-cover absolute z-10"
          src={paketlar_img1}
          alt=""
        />
        <h1 className="z-20 text-[42px] font-bold tracking-[2px] text-[#1C1C1C]">
          Paketlar
        </h1>
      </div>
      {/* Main qismi */}

      {/* shaharlar  */}
      {Paketlar_data.map((paket) => (
        <div
          className="sm:w-[100%] sm:h-[509px] md:h-[250px] xl:h-[310px] xl:w-[87%] md:flex"
          key={paket.id}
        >
          <div className="sm:w-[100%] sm:h-[325px]  sm:flex sm:items-center sm:justify-center lg:justify-end p-[40px]">
            <div className="xl:w-[463px] xl:h-[260px] lg:w-[390px] md:w-[70%] sm:w-[76%] sm:h-[277px] ">
              <img src={paket.img} alt="" />
            </div>
          </div>
          <div className="sm:w-[100%] sm:h-[183px] sm:flex sm:flex-col sm:justify-center md:p-0  sm:pl-5">
            <Link to={`${paket.id}`}>
              <h1 className="sm:text-[40px] text-[#1B4557] sm:font-bold sm:underline sm:leading-[100px]">
                {paket.title}
              </h1>
              <p className="sm:text-[18px] text-[#1B4557] sm:font-semibold">
                {paket.price}
              </p>
            </Link>
          </div>
        </div>
      ))}
      {/*shaharlar  */}

      <div className="w-[100%] h-[100px] flex items-center justify-center bg-[#387B5B] text-[24px] font-bold text-white">
        <h1>Dunyoning ko'plab shaharlariga sayohatlar</h1>
      </div>

      {/* Slider qismi */}
      <div className="w-[100%] h-[750px] pt-[20px] p-[50px]">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img5}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img6}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img7}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img8}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img9}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img10}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img11}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img12}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img13}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img14}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img15}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img16}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img17}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img18}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img19}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img20}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img21}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img22}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[700px] object-cover"
              src={paketlar_img23}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Slider qismi */}

      {/* Footer qismi */}
      <div className="w-[100%] h-[150px] p-[50px]">
        <div className="w-[100%] h-[100px] flex items-center justify-center  text-[16px] font-normal text-[#1c1c1c]  border-t-2 border-slate-300 ">
          <h1>Al-Rashid Tourism 2023</h1>{" "}
        </div>
      </div>
    </div>
  );
}

export default Paketlar;
