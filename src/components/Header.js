import React, { useState } from "react";
import Language from "../language/Language";
import { useTranslation } from "react-i18next";

function Header() {

  const data = [{ id: 0, label: "UZB" }, { id: 1, label: "RUS" }, { id: 2, label: "ENG" }, { id: 3, label: "ARAB" }];
  const { i18n ,t} = useTranslation();
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    setTimeout(() => {
      let lg = window.localStorage.getItem("i18nextLng")
      setSelectedItem(lg)
    }, 500);


  };
  return (
    <div className="backdrop-blur-md bg-black/25 w-[100%] h-[50vh]">
      <div className="flex items-center xl:pt-20 gap-32 h-[300px] justify-center overflow-hidden flex-col md:flex-row header  relative">
        <div className="absolute w-full h-full bg-black/50 top-0"></div>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="w-36 h-10 text-center bg-transparent border-b-2 border-red-700 text-red-700 z-10"
        >
          {
            data.map(lang => (
              <option key={lang.id} className="text-red-700" value={lang.label}>
                {lang.label}
              </option>
            ))
          }
        </select>
        {/* <Language /> */}
        <div className="text-center z-10">
          <h1 className="text-white text-2xl font-semibold">
           {t("together")} 
          </h1>
          <h2 className="text-white  font-semibold">
            {t("maintitle")}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
