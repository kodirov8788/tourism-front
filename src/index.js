import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Redirectbybtn from './Redirectbybtn';
import Navbar from './components/Navbar';
import Paketlar from './pages/Paketlar/Paketlar';
import Boglanish from "./pages/bog'lanish/Boglanish"
import BizHaqimizdaHeader from './components/BizHaqimizdaHeader';
import Singlepage from './pages/SinglePage/Singlepage';
import { UserProvider } from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/pay' element={<App />} />
     <Route path='/' element={<Redirectbybtn />} /> */}
          <Route path='/' element={<App />} />
          <Route path='/paketlar' element={<Paketlar />} />
          <Route path='/paketlar/:id' element={< Singlepage />} />
          <Route path='/boglanish' element={<Boglanish />} />
          <Route path='/biz-haqimizda' element={<BizHaqimizdaHeader />} />

          <Route path='*' element={<h1 className='text-center mt-10 text-5xl font-bold'>404 || Pages not found</h1>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
