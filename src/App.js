import axios from "axios";
import { useContext, useEffect } from "react";

import BoshSaxifa from "./pages/BoshSaxifa/BoshSaxifa";
import { Navigate, Route, Routes } from "react-router-dom";
import Redirectbybtn from './Redirectbybtn';
import Paketlar from './pages/Paketlar/Paketlar';
import Boglanish from "./pages/bog'lanish/Boglanish"
import BizHaqimizdaHeader from './components/BizHaqimizdaHeader';
import Singlepage from './pages/SinglePage/Singlepage';
import Admin from './pages/admin/Admin';
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";
import ReactLoading from "react-loading";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useAuthContext()
  const { isLoading } = useContext(AuthContext)
  return (
    <div className="">
      {isLoading ? <div className="top-0 left-0 w-full fixed  h-screen bg-black/50 z-20 flex justify-center items-center">
        <ReactLoading type={"spokes"} width={"100px"} color="white" className="absolute text-[40px]" />
      </div> : <></>}

      <Routes>

        <Route path='/' element={<BoshSaxifa />} />
        <Route path='/paketlar' element={<Paketlar />} />
        <Route path='/paketlar/:id' element={< Singlepage />} />
        <Route path='/boglanish' element={<Boglanish />} />
        <Route path='/biz-haqimizda' element={<BizHaqimizdaHeader />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/login" />}
        />

        <Route path='*' element={<h1 className='text-center mt-10 text-5xl font-bold'>404 || Pages not found</h1>} />
      </Routes>

    </div>
  )
}

export default App
