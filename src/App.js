
import React from "react";
import "./App.css";
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fiancailles from "./pages/Fiancailles";
import Contactus from "./pages/Contactus";
import Anniversaire from "./pages/Anniversaire";
import Autres from "./pages/Autres";
import Mariage from "./pages/Mariage";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    
    
      <BrowserRouter>
      <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/mariage" element={<Mariage/>}></Route>
          <Route path="/autres" element={<Autres/>}></Route>
          <Route path="/anniversaire" element={<Anniversaire/>}></Route>
          <Route path="/fiançailles" element={<Fiancailles/>}></Route>
        </Routes>
        <div> 
        <Footer/>
        </div>
        
      </BrowserRouter>
      
    
  );
}

export default App;