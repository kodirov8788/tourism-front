import React from "react";

function Header() {
  return (
    <div className="backdrop-blur-md bg-black/25 w-[100%] h-[50vh]">
      <div className="flex items-center xl:pt-20 gap-32 h-[300px] justify-center overflow-hidden flex-col md:flex-row header  relative">
        <div className="absolute w-full h-full bg-black/50 top-0"></div>
        <select
          name=""
          id=""
          className="w-36 h-10 text-center bg-transparent border-b-2 border-red-700 text-red-700 z-10"
        >
          <option className="text-red-700" value="UZB">
            UZB
          </option>
          <option className="text-red-700" value="RUS">
            RUS
          </option>
          <option className="text-red-700" value="ARAB">
            ARAB
          </option>
          <option className="text-red-700" value="ENG">
            ENG
          </option>
        </select>
        <div className="text-center z-10">
          <h1 className="text-white text-2xl font-semibold">
            Birgalikida orzular sari
          </h1>
          <h2 className="text-white  font-semibold">
            Dunyoning istalgan burchagiga biz orqali sayohat <br /> qiling
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
