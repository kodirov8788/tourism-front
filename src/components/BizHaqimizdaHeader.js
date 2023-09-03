import React from "react";
import WhatsApp from "../images/whatsapp.png";
import Telegram from "../images/telegram.png";

function BizHaqimizdaHeader() {
  return (
    <div>
      <div className="bizHaqimizda flex justify-center items-center">
        <h1 className="text-4xl text-white font-bold font-sans">
          Biz haqimizda
        </h1>
      </div>
      <div className="bg-[rgb(27,69,87)] text-white flex justify-center py-10">
        <h1 className="text-2xl font-bold">
          "Al-Rashid Tourism" M.CH.J. Namangan shahrida joylashgan, O'zbekiston
          hududida turizm <br /> sohasida faoliyat yurituvchi O'zbek-Arab
          kompaniyasi bo'lib, Dubay / Birlashgan Arab <br /> Amirliklaridagi
          "Smart Solution for Business Men Services" kompaniyasining filiali{" "}
          <br /> hisoblanadi. O'zbekiston ichida va undan tashqarida bandlik
          xizmatlarini, Ko'rfaz <br />
          mamlakatlari uchun istalgan turdagi vizalar va yashash joylarini,
          barcha aviakompaniyalar <br /> bortlarida dunyoning turli
          burchaklariga chiptalarni bron qilishni ta'minlaymiz.{" "}
        </h1>
      </div>
      <div className="bg-[rgb(56,123,91)] py-10 text-center">
        <h1 className="text-2xl text-white font-bold">Murojat uchun</h1>
      </div>
      <div className="bg-[rgb(213,228,217)]">
        <div className="flex-wrap flex items-center gap-32 justify-center py-6">
          <p>O'zbekcha/Руский +998917580093 +998972160093</p>
          <div className="flex h-[50px]  items-center gap-4 ">
            <img src={WhatsApp} className="w-10 h-10" alt="" />
            <img src={Telegram} className="w-10 h-10" alt="" />
          </div>
        </div>
        <hr className="text-[rgb(181,194,185)] w-[1000px] ml-64" />
        <div className="flex flex-wrap items-center gap-32 justify-center py-6">
          <p>O'zbekcha/Turkçe +998882509005</p>
          <div className="flex h-[50px] gap-4 items-center">
            <img src={WhatsApp} className="w-10 h-10" alt="" />
            <img src={Telegram} className="w-10 h-10" alt="" />
          </div>
        </div>
        <hr className="text-[rgb(181,194,185)] w-[1000px] ml-64" />
        <p className="py-6 flex justify-center">Arabic/English +998930066735</p>
      </div>
      <div className="bg-[rgb(56,123,91)] py-10 text-center">
        <a className="text-lg underline cursor-pointer text-white font-extralight">
          Bizning manzil: Namangan sh. 6-mkr sanoat ko'chasi 5-uy
        </a>
      </div>
      <div className="flex justify-center bg-[rgb(213,228,217)]">
        <iframe
          className="xl:w-[1200px] xl:h-[350px] lg:w-[900px] md:w-[700px] md:h-[300px] sm:w-[500px] sm:h-[270px] my-8"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.1260077997704!2d71.61117507524898!3d41.000615119897965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzAyLjIiTiA3McKwMzYnNDkuNSJF!5e0!3m2!1sru!2s!4v1693367353040!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer className="bg-[rgb(213,228,217)] h-20">
        <hr className="text-[rgb(181,194,185)] w-[1200px] ml-40" />
        <p className="text-[rgb(76,79,101)] text-[12px] text-center my-7">Al-Rashid Tourism 2023</p>
      </footer>
    </div>
  );
}

export default BizHaqimizdaHeader;
