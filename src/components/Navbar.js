import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <nav className="w-[100%] h-14 px-6 flex justify-between items-center text-white bg-green-950">
        <div>
          {modal ? (
            <div className="top-[-1px] z-50 bg-black w-[50%] left-[-1px] h-[100vh] fixed">
              <AiOutlineClose className="text-white cursor-pointer mt-5 ml-5" onClick={() => showModal()} />
              <ul>
                <li className="mt-5 ml-5">
                  <Link to={"/"}>Bosh Sahifa</Link>
                </li>
                <li className="mt-5 ml-5">
                  <Link to={"boglanish"}>Bog'lanish</Link>
                </li>
                <li className="mt-5 ml-5">
                  <Link to={"paketlar"}>Paketlar</Link>
                </li>
                <li className="mt-5 ml-5">
                  <Link to={"biz-haqimizda"}>Biz haqimizda</Link>
                </li>
                <li className="mt-5 ml-5">
                  <AiOutlineSearch />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center gap-5">
            <GiHamburgerMenu
              className="lg:hidden flex cursor-pointer"
              onClick={() => showModal()}
            />
            <h1 className="text-xl font-[Montserrat] font-light">
              AI-Rashid Tourism
            </h1>
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-5">
          <li>
            <Link to={"/"}>Bosh Sahifa</Link>
          </li>
          <li>
            <Link to={"boglanish"}>Bog'lanish</Link>
          </li>
          <li>
            <Link to={"paketlar"} >Paketlar</Link>
          </li>
          <li>
            <Link to={"biz-haqimizda"}>Biz haqimizda</Link>
          </li>
          <li>
            <AiOutlineSearch />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
