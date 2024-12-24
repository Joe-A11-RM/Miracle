import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollTop from "./ScrollTop/ScrollTop";

export default function MainLayout() {
  return (
    <div className="page-container">
      <ScrollTop />
      <NavBar />

      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
