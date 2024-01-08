import React from "react";
import * as Components from "../Components";

const { Navbar, About, Contact, Footer, FutureProjects, Home, Projects, Work } =
  Components;

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Work />
      <Projects />
      <FutureProjects />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
