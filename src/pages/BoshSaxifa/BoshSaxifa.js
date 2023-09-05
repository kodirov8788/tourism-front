import React from 'react'
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Turistik from "../../components/Turistik";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Xizmatlar from "../../components/Xizmatlar";
import Boglanish from '../bog\'lanish/Boglanish';

function BoshSaxifa() {
  return (
    <div>
      <Header />
      <Main />
      <Xizmatlar />
      <Turistik />
      <div className="bg-[#1B4557] mb-5 w-full h-[120px] flex justify-center items-center ">
        <h1 className='text-white font-bold text-2xl md:text-4xl tracking-[10px]'>GALEREYA</h1>
      </div>
      <Slider />
      <div className="bg-[#1B4557] mt-5 w-full h-[120px] flex justify-center items-center ">
        <h1 className='text-white font-bold text-2xl md:text-4xl tracking-[5px]'>Biz bilan bog'lanish</h1>
      </div>
      <Boglanish />
      <Footer />
    </div>
  )
}

export default BoshSaxifa