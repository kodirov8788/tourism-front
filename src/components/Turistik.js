import React from "react";
import { Turistik_paketlar } from "../static_data";
import { Link } from "react-router-dom";

function Turistik() {
  return (
    <div>
      <div className="bg-[rgb(56,123,91)] h-28 text-center pt-10">
        <h1 className="text-2xl font-bold text-white">Turistik Paketlar</h1>
      </div>
      <div className="flex flex-wrap gap-14 py-7 justify-center">
        {Turistik_paketlar.map((paket) => (
          <div key={paket.id} className="text-center w-[315px]">
            <img className="w-[315px] h-[315px]" src={paket.img} alt="" />
            <Link to={`paketlar/${paket.id}`}>
              <h3 className="underline text-[rgb(81,69,95)] mt-2">{paket.text}</h3>
              <h4 className="underline text-[rgb(81,69,95)] mt-3">{paket.price}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Turistik;
