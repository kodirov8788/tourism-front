import axios from "axios";
import { useEffect } from "react";
function App() {

  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <form action="https://my.click.uz/services/pay" method="get" target="_blank">
        <button typo="submit" className="pay_with_click border border-black px-3 py-2"><i></i>Оплатить через CLICK</button>
        <input type="hidden" name="amount" value="1000" />
        <input type="hidden" name="merchant_id" value="21689" />
        <input type="hidden" name="merchant_user_id" value="34752" />
        <input type="hidden" name="service_id" value="29374" />
        <input type="hidden" name="transaction_param" value="Muhammadali Qodirov" />
        <input type="hidden" name="return_url" value="http://localhost:3000/" />
        <input type="hidden" name="card_type" value="humo" />
      </form>
    </div >
  );
}

export default App;
