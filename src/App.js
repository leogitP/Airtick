import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 安裝icon、bootstrap、jquery
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
// import axios from "axois";



// 元件
import Error from './components/Error';
// 機票
import Airticket from './page/airticket/Airticket';
// 導覽列
import Navigation from './components/tool/Navigation';

// 頁尾
// import Footer from './components/tool/Footer';



function App() {
  return (

    <div>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Airticket/>} exact />
          <Route path="/Airticket" element={<Airticket/>} exact />
          <Route component={Error} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;