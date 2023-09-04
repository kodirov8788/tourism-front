import React from 'react'
import Img from "../images/image-14.jpg"

const Footer = () => {
  return (
    <div className='footer h-full md:min-h-[200px] flex flex-col md:flex-row md:px-20 items-center object-cover justify-between text-white p-5 '>


      <div className="w-4/5 md:w-2/5 text-lg md:flex  justify-around md:text-lg">
        <h1>Summani kiriting!</h1>
        <div className="">
          <input type="number" className='bg-transparent border-b-2 border-white focus:outline-none ' /> <span>so'm</span>
        </div>
        <button>To'lov qilish</button>

      </div>

      <div className="flex w-4/5 md:w-2/5 mt-3 justify-between  md:text-lg">
        <div className='md:flex  justify-between w-[350px] items-center'>
          <h1 className='text-xl font-bold  text-red-700'>To'lov  turlari</h1>
          <p className='mt-1'>Al-Rashid Tourism 2023</p>
        </div>
        <img className='w-20 h-20' src={Img} alt="" />
      </div>

    </div>
  )
}

export default Footer;
