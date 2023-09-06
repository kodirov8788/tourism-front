import axios from "axios";
import { useEffect } from "react";

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
function App() {
  const { user } = useAuthContext()
  console.log(user)
  return (
    <div className="">
      <Routes>
        {/* <Route path='/pay' element={<App />} />
     <Route path='/' element={<Redirectbybtn />} /> */}
        <Route path='/' element={<BoshSaxifa />} />
        <Route path='/paketlar' element={<Paketlar />} />
        <Route path='/paketlar/:id' element={< Singlepage />} />
        <Route path='/boglanish' element={<Boglanish />} />
        <Route path='/biz-haqimizda' element={<BizHaqimizdaHeader />} />
        <Route path='/admin' element={<Admin />} />
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
