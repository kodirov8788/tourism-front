import React from "react";
import Img1 from "../images/image-2.jpg";
import Img2 from "../images/IMAGE-18.jpg";
import Img3 from "../images/image-12.jpg";
import Img4 from "../images/image-15.jpg";
import Img5 from "../images/image-16.png";
import Img6 from "../images/IMAGE-19.jpg";
import Img7 from "../images/image-4.jpg";
import Img8 from "../images/image-3.jpg";

function Xizmatlar() {
  return (
    <div>
      <div className="bg-[rgb(27,69,87)] h-28 text-center pt-10">
        <h1 className="text-2xl font-bold text-white">Xizmatlar</h1>
      </div>
      <div className="bg-[rgb(56,123,91)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img1} alt="" />
        <h1 className="text-3xl underline text-white mt-7">
          Viza olishga ko'mak
        </h1>
      </div>
      <div className="bg-[rgb(213,228,217)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img2} alt="" />
        <h1 className="text-3xl underline text-[rgb(27,69,87)] mt-7">
          Sayohatni tashkil etish
        </h1>
      </div>
      <div className="bg-[rgb(27,69,87)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img3} alt="" />
        <h1 className="text-3xl underline text-[rgb(213,228,217)] mt-7">
          Avia chiptalarni bron qilish
        </h1>
      </div>
      <div className="bg-[rgb(213,228,217)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img4} alt="" />
        <h1 className="text-3xl underline text-[rgb(27,69,87)] mt-7">
          Gid yo'riqchi bilan ta'minlash
        </h1>
      </div>
      <div className="bg-[rgb(56,123,91)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img5} alt="" />
        <h1 className="text-3xl underline text-[#F9F9F9] mt-7">
          Rent car (avtomobil ijarasi)
        </h1>
      </div>
      <div className="bg-[rgb(213,228,217)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img6} alt="" />
        <h1 className="text-3xl underline text-[rgb(27,69,87)] mt-7">
          Ovqatlarni tashkil etish
        </h1>
      </div>
      <div className="bg-[rgb(27,69,87)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img7} alt="" />
        <h1 className="text-3xl underline text-[rgb(213,228,209)] mt-7">
          Mehmonxonaga joylashtirish va band qilish
        </h1>
      </div>
      <div className="bg-[rgb(213,228,217)] sm:pl-20 xl:flex py-6 xl:pl-40 gap-9">
        <img className="w-[548px] h-[308px]" src={Img8} alt="" />
        <h1 className="text-3xl underline text-[rgb(27,69,87)] mt-7">
          Transport bilan ta'minlash va boshqa <br /> xizmatlar
        </h1>
      </div>
    </div>
  );
}

export default Xizmatlar;
