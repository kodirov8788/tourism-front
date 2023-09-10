import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { language, setSelectedItem } = useContext(AuthContext)
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
            language.map(lang => (
              <option key={lang.id} className="text-red-700" value={lang.label}>
                {lang.title}
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
