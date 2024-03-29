import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './language/i18n';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <App />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
