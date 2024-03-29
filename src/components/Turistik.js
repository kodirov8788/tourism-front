import React from "react";
import { Turistik_paketlar } from "../static_data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Turistik() {
  const { t } = useTranslation();

  let lang = window.localStorage.getItem("i18nextLng")



  return (
    <div>
      <div className="bg-[rgb(56,123,91)] h-28 text-center pt-10">
        <h1 className="text-2xl font-bold text-white">{t("turistik_text")}</h1>
      </div>
      <div className="flex flex-wrap gap-14 py-7 justify-center">
        {Turistik_paketlar.map((paket) => (
          <div key={paket.id} className="text-center w-[315px]">
            <img className="w-[315px] h-[315px]" src={paket.img} alt="" />
            <Link to={`paketlar/${paket.id}`}>
              <h3 className="underline text-[rgb(81,69,95)] mt-2">{lang === "ru" ? paket.text_ru
                : lang === "en" ? paket.text_en
                  : lang === "ar" ? paket.text_ar : paket.text_uz}</h3>
              <h4 className="underline text-[rgb(81,69,95)] mt-3">{paket.price}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Turistik;
