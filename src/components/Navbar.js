import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "../api/Axios";

function Navbar() {
  const [modal, setModal] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [navNavPathname, setNavPathname] = useState("");
  const { user, dispatch } = useAuthContext()
  const pathname = useLocation().pathname
  const showModal = () => {
    setModal(!modal);
  };
  // console.log(bgColor)


  useEffect(() => {
    const ChangeRoute = () => {
      setNavPathname(pathname)
    }
    ChangeRoute()
  }, [pathname])

  let Scroll = window.scrollY

  useEffect(() => {
    const ChangeRoute = () => {
      window.addEventListener("scroll", () => {
        // console.log(window.scrollY)
        if (window.scrollY < 50) {
          setBgColor(true)
        } else {
          setBgColor(false)
        }
      })
    }
    ChangeRoute()
  }, [Scroll])

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
  }



  return (
    <div className={`fixed top-0 z-30 left-0 w-full duration-300 bg-transparent ${bgColor ? "" : "bg-black/100"} `}>
      <nav className="w-full h-14 px-6 flex justify-between items-center text-white">

        <div className={`${modal ? "translate-x-0" : "translate-x-[-3000px]"} w-full duration-300  bg-black/50 h-screen   absolute left-0 top-0 overflow-hidden`}>

          <div onClick={() => setModal(false)} className={`absolute w-1/2 z-40 bg-black/50 right-0 h-full pt-5 `}></div>

          <div className={`absolute  w-1/2  bg-black  h-full pt-5 `}>
            <AiOutlineClose className="text-white cursor-pointer  ml-5" onClick={() => showModal()} />
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


        </div>

        <div className="flex items-center gap-5">
          <GiHamburgerMenu
            className="lg:hidden flex cursor-pointer"
            onClick={() => showModal()}
          />
          <h1 className="text-xl font-[Montserrat] font-light">
            AI-Rashid Tourism
          </h1>
        </div>
        <ul className="lg:flex hidden items-center gap-3">
          <li className=" w-24 text-center">
            <Link className={` ${navNavPathname == "/" ? "font-bold" : ""}`} to={"/"}>Bosh Sahifa</Link>
          </li>
          <li className=" w-24 text-center">
            <Link className={` ${navNavPathname == "/boglanish" ? "font-bold" : ""}`} to={"boglanish"}>Bog'lanish</Link>
          </li>
          <li className=" w-24 text-center">
            <Link className={` ${navNavPathname == "/paketlar" ? "font-bold" : ""}`} to={"paketlar"} >Paketlar</Link>
          </li>
          <li className=" w-28 text-center">
            <Link className={` ${navNavPathname == "/biz-haqimizda" ? "font-bold" : ""}`} to={"biz-haqimizda"}>Biz haqimizda</Link>
          </li>

          {user ? <>
            <li className=" w-28 text-center">
              <Link className={` ${navNavPathname == "/admin" ? "font-bold" : ""}`} to={"admin"}>Admin paneli</Link>
            </li>
            <button className=" w-28 text-center " onClick={logout}>logout</button>
          </> : <li className=" w-28 text-center">
            <Link className={` ${navNavPathname == "/login" ? "font-bold" : ""}`} to={"login"}>Log In</Link>
          </li>}

          <li>
            <AiOutlineSearch />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
