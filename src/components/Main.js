import React from "react";
import { useTranslation } from "react-i18next";
function Main() {
  const { t} = useTranslation();

  return (
    <div className="bg-[rgb(56,123,91)] text-center py-11 text-white">
      <h1 className="xl:text-2xl text-xl font-bold">{t("maintext")}</h1>
      <h1 className="xl:text-xl text-lg font-bold mt-4 w-auto">
      {t("maintext_h1")}
      </h1>
    </div>
  );
}

export default Main;
