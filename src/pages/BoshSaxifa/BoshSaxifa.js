import React from 'react'
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Turistik from "../../components/Turistik paketlar/Turistik";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import Xizmatlar from "../../components/xizmatlar/Xizmatlar";

function BoshSaxifa() {
  return (
    <div>
        <Header/>
        <Main/>
        <Xizmatlar/>
        <Turistik/>
        <Slider/>
        <Footer/>        
    </div>
  )
}

export default BoshSaxifa