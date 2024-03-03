import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import PrivateComponent from "./PrivateComponent.jsx";
import ShowProducts from "./ShowProducts.jsx";
import AddProduct from "./AddProduct.jsx";
import UpdateProduct from "./UpdateProduct.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ShowProducts/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/profile" element={<h1>user profile</h1>} />
          </Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
