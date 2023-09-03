import React from 'react'
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Turistik from "../../components/Turistik";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Xizmatlar from "../../components/Xizmatlar";

function BoshSaxifa() {
  return (
    <div>
      <Header />
      <Main />
      <Xizmatlar />
      <Turistik />
      <Slider />
      <Footer />
    </div>
  )
}

export default BoshSaxifa