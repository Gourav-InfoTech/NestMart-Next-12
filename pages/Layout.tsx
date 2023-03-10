import React from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Appbar />
      <div className="navv">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
