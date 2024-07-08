import React from "react";
import Header from "../common/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Register from "../register/Register";
import Login from "../login/Login";
import Annonce from "../annonce/Annonce";

const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/Addannonce" element={<Annonce />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Pages;
