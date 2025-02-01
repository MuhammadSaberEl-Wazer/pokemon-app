import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
