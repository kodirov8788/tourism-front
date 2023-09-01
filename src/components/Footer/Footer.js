import React from 'react'
import Img from "../../images/image-14.jpg"

const Footer = () => {
  return (
    <div className='footer sm:h-96 lg:flex sm:pt-16 sm:pl-[300px] justify-center text-white gap-24 lg:pl-96 mt-4'>
        <div>
            <h1 className='text-xl font-bold mt-7 text-red-700'>To'lov <br /> turlari</h1>
            <p className='mt-1'>Al-Rashid Tourism 2023</p>
        </div>
        <img className='w-40 h-40 mt-7' src={Img} alt="" />
    </div>
  )
}

export default Footer;
