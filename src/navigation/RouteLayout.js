import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "../pages/Blogs";
import Contactus from "../pages/Contactus";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import OurServices from "../pages/OurServices";
import Layout from "../components/Layout";
const RouteLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="services" element={<OurServices />} />
            <Route path="contact" element={<Contactus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteLayout;
