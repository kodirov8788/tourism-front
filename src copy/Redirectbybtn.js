
function Redirectbybtn() {

  // const serviceId = '29374';
  // const merchantId = '21689';
  // const transactionParam = 'test'
  // const amount = 1000;


  // useEffect(() => {
  //   const getApi = async () => {
  //     await axios.get(`https://my.click.uz/services/pay?service_id=${serviceId}&merchant_id=${merchantId}&amount=${amount}&transaction_param=${transactionParam}`)
  //       .then(res => console.log(res)).catch(err => console.log(err))
  //   }
  //   getApi()
  // }, [])
  const redirectToPaymentPage = () => {
    const merchantId = '21689';
    const serviceId = '29374';
    const transactionParam = 'test';
    const amount = '1000';
    const returnUrl = 'https://www.al-rashidtourism.uz/';
    const cardType = 'humo'; // or 'humo' or other appropriate value

    const paymentUrl = `https://my.click.uz/services/pay?service_id=${serviceId}&merchant_id=${merchantId}&amount=${amount}&transaction_param=${transactionParam}&return_url=${returnUrl}&card_type=${cardType}`;
    console.log(paymentUrl)
    // Redirect the user to the payment page
    window.location.href = paymentUrl;
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="border border-black p-3" formTarget="_blank" onClick={() => redirectToPaymentPage()}>To'lov</button>
    </div>
  );
}

export default Redirectbybtn;
