import React from 'react'
import Slider from "../../components/Slider";
import Turistik from "../../components/Turistik";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Xizmatlar from "../../components/Xizmatlar";
import Boglanish from '../bog\'lanish/Boglanish';
import { useTranslation } from 'react-i18next';
function BoshSaxifa() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Main />
      <Xizmatlar />
      <Turistik />
      <div className="bg-[#1B4557] mb-5 w-full h-[120px] flex justify-center items-center ">
        <h1 className='text-white font-bold text-2xl md:text-4xl tracking-[10px]'>{t("boglanish_galeriya")}</h1>
      </div>
      <Slider />
      <div className="bg-[#1B4557] mt-5 w-full h-[120px] flex justify-center items-center ">
        <h1 className='text-white font-bold text-2xl md:text-4xl tracking-[5px]'>{t("boglanish_text")}</h1>
      </div>
      <Boglanish />
    </div>
  )
}

export default BoshSaxifa