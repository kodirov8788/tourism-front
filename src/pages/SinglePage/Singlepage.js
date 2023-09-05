import React, { useEffect, useState } from "react";
import { Turistik_paketlar } from "../../static_data";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../api/Axios";
function Singlepage() {
  let param = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState(null);
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
    lastname: "",
    address: "",
    number: "",
  });
  console.log(data);
  console.log(userData);

  const formRequest = (e) => {
    e.preventDefault();

    if (data) {
      const postData = async () => {
        await axios
          .post("client/create", {
            name: userData.name,
            lastname: userData.lastname,
            address: userData.address,
            number: userData.number,
            trip: data,
          })
          .then((res) => {
            console.log(res);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
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

  return (
    <div className="mt-[55px] pt-[20px] flex flex-col items-center">
      <Link to={-1}>Back</Link>

      <img
        className="w-4/5 md:w-fit  mx-auto flex rounded h-[400px] object-contain  "
        src={data?.img}
        alt=""
      />
      <h1 className="bg-blue-400 text-white w-4/5 text-center text-2xl p-3 m-2">
        {data?.text}
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
          Familiya
        </label>
        <input
          required
          className={style.input}
          type="text"
          name="lastname"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
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
          Malumotni jo`natish
        </button>
      </form>
      {/* <button className='border text-lg bg-blue-500 text-white px-3 py-2 my-4 rounded active:scale-95' type='button'>to'lov qilish</button> */}
    </div>
  );
}

export default Singlepage;
