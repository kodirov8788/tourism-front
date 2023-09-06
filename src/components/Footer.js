import React from 'react'
import Img from "../images/image-14.jpg"

const Footer = () => {
  const serviceId = '29374';
  const merchantId = '21689';
  // const transactionParam = 'test'
  // const amount = 1000;



  const redirectToPaymentPage = (e) => {
    e.preventDefault()

    const merchantId = '21689';
    const serviceId = '29374';
    const transactionParam = e.target[0].value;
    const amount = e.target[1].value;
    const returnUrl = 'https://www.al-rashidtourism.uz/';
    const cardType = e.target[2].value; // or 'humo' or other appropriate value
    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    const paymentUrl = `https://my.click.uz/services/pay?service_id=${serviceId}&merchant_id=${merchantId}&amount=${amount}&transaction_param=${transactionParam}&return_url=${returnUrl}&card_type=${cardType}`;
    console.log(paymentUrl)
    // Redirect the user to the payment page
    window.location.href = paymentUrl;
  };

  return (<div className="footer object-cover">
    <div className=' h-full md:min-h-[200px] flex flex-col md:flex-row md:px-20 items-center  justify-between text-white p-5 '>


      <form onSubmit={redirectToPaymentPage} className="w-4/5 md:w-2/5 text-lg md:flex items-center justify-around md:text-lg">
        <h1>Summani kiriting!</h1>
        <div className="flex flex-col">
          <div className="my-3">
            <input required type="text" placeholder='comments' className='bg-transparent border-b-2 border-white focus:outline-none ' />
          </div>
          <div className="my-3">
            <input placeholder='miqdor' required type="number" className='bg-transparent border-b-2 border-white focus:outline-none ' /> <span>so'm</span>
          </div>
          <select required className='bg-transparent border px-3 py-2 rounded' >
            <option value="">To'lov carta turini tanglang!</option>
            <option value="humo">Humo</option>
            <option value="uzcard">Uzcard</option>
          </select>
        </div>

        <button className='border mt-3 border-white px-3 py-2 rounded active:scale-95 hover:bg-white/10'>To'lov qilish</button>

      </form>

      <div className="flex w-4/5 md:w-2/5 mt-3 justify-between  md:text-lg">
        <div className='md:flex  justify-between w-[350px] items-center'>
          <h1 className='text-xl font-bold  text-red-700'>To'lov  turlari</h1>
          <p className='mt-1'>Al-Rashid Tourism 2023</p>
        </div>
        <img className='w-20 h-20' src={Img} alt="" />
      </div>
    </div>
    <p className='text-center my-[15px] text-white lg:text-md '>Al-Rashid Tourism 2023</p>

  </div>
  )
}

export default Footer;
