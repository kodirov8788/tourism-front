import React from 'react'
import { GoMail } from "react-icons/go";
import { FaCloud } from "react-icons/fa6";

function Boglanish() {
  return (
    <div>

      {/* main */}
      <div className='w-full bg-[#D5E4D9]  pt-[20px]'>
        <p className='w-[95%] m-auto   border-[2px]  bg-[B5C2B9] ' ></p>

        <div className='w-[90%] m-auto   my-[30px] md:flex  md:justify-between   ' >
          {/* form */}
          <div className='sm:w-[90%]   md:w-[48%] overflow-auto h-[1000px] touch-auto'>
          <div className="">
      <div className='w-[95%]    border-t-[#3D8F2D] border-t-[15px]  rounded-t-xl bg-[white] '>
              <h1 className='text-4xl w-[90%]  ml-[20px] my-[20px]'>
                Bog'lanish uchun (let us contact you)
              </h1>

              <div className='w-full  border-2   border-b-[#ccc] border-t-[#ccc]  '>
                <div className=' w-[94%]    m-auto  py-[15px]  flex justify-between md:flex-col lg:flex-row' >
                  <div>
                    <p>abdullosaydullayev8@gmail.com  <a href='#' className='text-blue-500'>Сменить аккаунт</a> </p>
                    <p className=' flex  items-center '>
                      < GoMail /> <span className='ml-4  text-md font-sans '>Совместный доступ отсутствует</span>
                    </p>
                  </div>

                  <div>
                    <i className=''>
                      < FaCloud />
                    </i>
                  </div>

                </div>


              </div>
              <p className="text-red-600 py-[15px] pl-[20px] text-md" >*Обязательный вопрос</p>

            </div>
          </div>

            

            <div className='mt-[30px] w-[95%] relative'>
              <form action="">
                    <div className=' absolute w-[50px] h-[50px] bg-gray-400  hidden  '><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJobXVXYiIgdmlld0JveD0iMCAwIDI0IDI0IiBmb2N1c2FibGU9ImZhbHNlIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDE5SDVWNWg3VjNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0ydjd6TTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzaC03eiIvPjwvc3ZnPg==" alt="" /></div>
                <div className=' bg-[white] mt-[18px]  h-[160px] pl-[20px]  flex flex-col justify-evenly rounded-xl '>
                  <h1 className='text-2xl'>
                    Ism(name)*
                  </h1>
                  <div className=" w-1/2 h-[30px] mb-[15px]   ">
                    <input className=' border-b-2 border-b-[#000] h-full w-full outline-none' type="text" placeholder='Мой ответ' />
                  </div>
                </div>

                <div className=' bg-[white] mt-[18px]  h-[160px] pl-[20px]  flex flex-col justify-evenly rounded-xl '>
                  <h1 className='text-2xl'>
                    Elektron pochta manzili(e mail)*
                  </h1>
                  <div className=" w-1/2 h-[30px] mb-[15px]   ">
                    <input className=' border-b-2 border-b-[#000] h-full w-full outline-none' type="email" placeholder='Мой ответ' />
                  </div>
                </div>

                <div className=' bg-[white] mt-[18px]  h-[160px] pl-[20px]  flex flex-col justify-evenly rounded-xl '>
                  <h1 className='text-2xl'>
                    Telefon raqam(mobile number)
                  </h1>
                  <div className=" w-1/2 h-[30px] mb-[15px]   ">
                    <input className=' border-b-2 border-b-[#000] h-full w-full outline-none' type="text" placeholder='Мой ответ' />
                  </div>
                </div>

                <div className=' bg-[white] mt-[18px]  h-[160px] pl-[20px]  flex flex-col justify-evenly rounded-xl '>
                  <h1 className='text-2xl'>
                    Izoh(inquiry service)
                  </h1>
                  <div className=" w-[95%] h-[30px] mb-[15px]   ">
                    <input className=' border-b-2 border-b-[#000] h-full w-full outline-none' type="text" placeholder='Мой ответ' />
                  </div>
                </div>

                {/* button */}

                <div className='w-full border-2 border-black h-[70px] flex justify-between items-center '>
                  <button className='h-[40px] border rounded-lg w-[140px] text-[16px] bg-[rgb(41,137,4)] text-white hover:bg-[rgb(50,153,9)]'>Отправить</button>
                  <button className='h-[40px] border w-[140px] text-[16px] bg-transparent text-[#298904] font-normal hover:bg-[#D0E0DB]'>Очистить форму</button>
                </div>


              </form>
            </div>



          </div>

          <div className=" sm:w-full sm:mt-[30px] md:w-[50%] md:mt-0">
            {/* map */}
            <div className="w-full   ">
              <iframe className='w-full h-[350px]' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.1260077997704!2d71.61117507524898!3d41.000615119897965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzAyLjIiTiA3McKwMzYnNDkuNSJF!5e0!3m2!1sru!2s!4v1693367353040!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className="w-full pl-4 font-sans ">
              <div className='py-[15px] text-[#387B5B] font-bold md:h-[70px] md:mt-[20px]' >Manzil: <a className='text-[#000]' href="https://www.google.com/maps/place/Al-Rashid+Tourism/@41.0005628,71.6133343,20.83z/data=!4m6!3m5!1s0x38bb4b68b99c130b:0xc6581409a3657f2d!8m2!3d41.0006275!4d71.6136595!16s%2Fg%2F11krbpw042?hl=ru&entry=tts&shorturl=1">Namangan sh. 6-mkr Sanoat ko'chasi 5-uy</a> </div>

              <div className="">
                <p>O'zbekcha/Руский +998917580093 +998972160093</p>

                <div className='w-1/2 flex h-[100px]  items-center gap-4 md:my-[20px] '>
                  <a href=""><img src="https://lh5.googleusercontent.com/L_aOwtsVtJkdNRdwqkkSe2Dj9i8zLaAiZrbhJHur0RSd9fg5XKTqHY9KXp7-TF2koSfkJtTwDJPUjvOuctZP5tCopZr0QmtBHY0DqNOHMic" alt="" /></a>
                  <a href=""><img src="https://lh3.googleusercontent.com/D4cukGDERxpttg4-riRyLiSAwHxnx9jaHRzzi62W9dagdiWW0cenuGzrCP0uTpHKvltjfAPQZ328yAvKTPuKA1Aim8IXFGuJ-Gs6FN3_aPA" alt="" /></a>
                </div>

              </div>

              <div className="">
                <p>O'zbekcha/Turkçe +998882509005</p>

                <div className='w-1/2 flex h-[100px]  items-center gap-4 '>
                  <a href=""><img src="https://lh5.googleusercontent.com/L_aOwtsVtJkdNRdwqkkSe2Dj9i8zLaAiZrbhJHur0RSd9fg5XKTqHY9KXp7-TF2koSfkJtTwDJPUjvOuctZP5tCopZr0QmtBHY0DqNOHMic" alt="" /></a>
                  <a href=""><img src="https://lh3.googleusercontent.com/D4cukGDERxpttg4-riRyLiSAwHxnx9jaHRzzi62W9dagdiWW0cenuGzrCP0uTpHKvltjfAPQZ328yAvKTPuKA1Aim8IXFGuJ-Gs6FN3_aPA" alt="" /></a>
                </div>

              </div>

              <p className='py-[15px]'>Arabic/English +998930066735</p>



            </div>



          </div>

        </div>

        <div className='w-full border border-red-500 mt-[-10px] '>
          <div className='w-full '>
            <button className='h-[100px] w-full bg-[#387B5B] text-[#fff] sm:text-xl'>Onlayn to'lov turlari</button>
          </div>
          <div className='w-[90%] h-[240px] sm:flex sm:items-center m-auto  md:px-[30px] border-b-2 border-b-gray-300'>
            <img className='w-[65%] h-[160px] md:w-[50%] md:h-[100px] sm:m-auto lg:h-[130px] lg:w-[50%] ' src="https://lh4.googleusercontent.com/_XLpM12hKQnwBbp1OGyABfftPMWuLSwEf7x4BIXVK9QBAr9Unp9aKK9_F6wg6_aPre8qXp9GMb53nDjiVnPKZSZfwI9nJWYJrSeLsUNYBqYrcyjPVJka29GOq6NwyewX3A=w1280" alt="" />
          </div>
          
            <p className='text-center my-[15px] text-black lg:text-md'>Al-Rashid Tourism 2023</p>

        </div>






      </div>
    </div>
  )
}

export default Boglanish