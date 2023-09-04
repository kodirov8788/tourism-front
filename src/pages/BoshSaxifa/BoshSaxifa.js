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
      <Slider />
      <Boglanish />
      <Footer />
    </div>
  )
}

export default BoshSaxifa