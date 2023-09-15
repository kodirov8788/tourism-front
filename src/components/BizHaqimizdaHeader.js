import React from "react";
import WhatsApp from "../images/whatsapp.png";
import Telegram from "../images/telegram.png";
import { useTranslation } from "react-i18next";
import Logo from "../images/alrashid.png"
function BizHaqimizdaHeader() {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="bizHaqimizda flex justify-center items-center">
        <h1 className="text-4xl text-white font-bold font-sans">
          {t("bizhaqimizda_main")}
        </h1>
      </div>
      <div className="bg-[rgb(27,69,87)] text-white flex justify-center py-10 p-10">
        <h1 className="text-2xl font-bold text-center">
          {t("maintext_h1")}
        </h1>
      </div>
      <div className="bg-[rgb(56,123,91)] py-10 text-center">
        <h1 className="text-2xl text-white font-bold">{t("bizhaqimizda_text")}</h1>
      </div>
      <div className="bg-[rgb(213,228,217)]">
        <div className="flex-wrap flex items-center gap-32 text-center justify-center py-6">
          <p>O'zbekcha/Руский +998917580093 +998972160093</p>
          <div className="flex h-[50px]  items-center gap-4 ">
            <img src={WhatsApp} className="w-10 h-10" alt="" />
            <img src={Telegram} className="w-10 h-10" alt="" />
          </div>
        </div>
        <hr className="text-[rgb(181,194,185)]  ml-64" />
        <div className="flex flex-wrap items-center gap-32 justify-center py-6">
          <p>O'zbekcha/Turkçe +998882509005</p>
          <div className="flex h-[50px] gap-4 items-center">
            <img src={WhatsApp} className="w-10 h-10" alt="" />
            <img src={Telegram} className="w-10 h-10" alt="" />
          </div>
        </div>
        <hr className="text-[rgb(181,194,185)]  ml-64" />
        <p className="py-6 flex justify-center">Arabic/English +998930066735</p>
      </div>
      <div className="bg-[rgb(56,123,91)] py-10 text-center">
        <a className="text-lg underline cursor-pointer text-white font-extralight">
          {t("boglanish_address")}{t("boglanish_addres")}
        </a>
      </div>
      <div className="flex justify-center bg-[rgb(213,228,217)]">
        <iframe
          className=" object-fit w-4/5 m-auto   sm:w-[500px] sm:h-[270px] md:w-[700px] md:h-[300px] lg:w-[900px] xl:w-[1200px] xl:h-[350px] my-8"
          src={Logo}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer className="bg-[rgb(213,228,217)] h-20">
        <hr className="text-[rgb(181,194,185)] lg:w-[1200px] ml-40" />
        <p className="text-[rgb(76,79,101)] text-[12px] text-center my-7">{t("footer_compania")}</p>
      </footer>
    </div>
  );
}

export default BizHaqimizdaHeader;
