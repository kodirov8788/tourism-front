import React, { useContext, useEffect, useState } from "react";
import { Turistik_paketlar } from "../../static_data";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../api/Axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
function Singlepage() {
  let { setIsLoading } = useContext(AuthContext)
  let param = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectData, setSelectData] = useState("");
  useEffect(() => {
    const getApi = async () => {
      let selected = await Turistik_paketlar.find(
        (paket) => paket.id == param.id
      );
      setData(selected);
    };
    getApi();
  }, [param.id]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  });
  // console.log(data);
  // console.log(userData);

  const formRequest = (e) => {
    e.preventDefault();
    setIsLoading(true)
    // console.log("first")
    if (data) {
      const postData = async () => {
        await axios
          .post("client/create", {
            name: userData.name,
            email: userData.email,
            address: userData.address,
            number: userData.number,
            trip: data,
          })
          .then((res) => {
            toast.success("ma'lumot qo'shildi!", {
              position: toast.POSITION.TOP_RIGHT
            });
            navigate("/");
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err);
            toast.error("serverda error", {
              position: toast.POSITION.TOP_RIGHT
            });
            setIsLoading(false)
          });
      };
      postData();
    } else {
      alert("data yo`q");
    }
  };

  let style = {
    input: "border border-black text-lg rounded indent-2",
    label: "text-lg",
  };



  const redirectToPaymentPage = (e) => {
    if (selectData === "") {
      console.log("sdas")

      toast.info("Carta turini tanglang!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      setIsLoading(true)

      const merchantId = '21689';
      const serviceId = '29374';
      const transactionParam = data.text;
      const amount = data.real_price;
      const returnUrl = 'https://www.al-rashidtourism.uz/';
      const cardType = selectData; // or 'humo' or other appropriate value
      const paymentUrl = `https://my.click.uz/services/pay?service_id=${serviceId}&merchant_id=${merchantId}&amount=${amount}&transaction_param=${transactionParam}&return_url=${returnUrl}&card_type=${cardType}`;
      console.log(paymentUrl)
      // Redirect the user to the payment page
      window.location.href = paymentUrl;
      setTimeout(() => {
        setIsLoading(false)
      }, 30000);


    }
  };


  return (
    <div className="mt-[55px] pt-[20px] flex flex-col items-center">
      <div className=" w-4/5 h-10">
        <Link className="block bg-blue-500 w-fit px-3 py-2 rounded text-white" to={-1}>Back</Link>

      </div>

      <img
        className="w-4/5 md:w-fit  mx-auto flex rounded h-[400px] object-contain  "
        src={data?.img}
        alt=""
      />
      <h1 className="bg-blue-400 text-white w-4/5 text-center text-2xl p-3 m-2">
        {data?.text_uz}
      </h1>
      <h2 className="bg-blue-400 text-white w-4/5 text-center text-2xl p-3 m-2">
        {data?.price}
      </h2>

      <form
        className="flex flex-col border w-4/5"
        action=""
        onSubmit={formRequest}
      >
        <label className={style.label} htmlFor="name">
          Ism
        </label>
        <input
          required
          className={style.input}
          type="text"
          name="name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <label className={style.label} htmlFor="lastname">
          Email
        </label>
        <input
          required
          className={style.input}
          type="email"
          name="lastname"
          onChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
        />
        <label className={style.label} htmlFor="number">
          Telefon raqam
        </label>
        <input
          required
          className={style.input}
          type="number"
          name="lastname"
          onChange={(e) => setUserData({ ...userData, number: e.target.value })}
        />
        <label className={style.label} htmlFor="lastname">
          Manzil
        </label>
        <input
          required
          className={style.input}
          type="text"
          name="lastname"
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />

        <button className="border text-lg bg-blue-500 text-white px-3 py-2  rounded active:scale-95 mt-3">
          Belet bron qilish
        </button>
      </form>
      <div className="w-4/5 md:w-2/5 text-lg flex items-center justify-around md:text-lg">

        <select onChange={(e) => setSelectData(e.target.value)} required className='bg-transparent border px-3 py-2 rounded' >
          <option value="">To'lov carta turini tanglang!</option>
          <option value="humo">Humo</option>
          <option value="uzcard">Uzcard</option>
        </select>

        <button onClick={() => redirectToPaymentPage()} className='border text-lg bg-blue-500 text-white px-3 py-2 my-4 rounded active:scale-95' type='button'>to'lov qilish</button>

      </div>

    </div>
  );
}

export default Singlepage;
