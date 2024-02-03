import React from "react";
import * as Components from "../Components";

const { Navbar, About, Contact, Footer, FutureProjects, Home, Projects, Work } =
  Components;

const Layout = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Work />
      <Projects />
      <FutureProjects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
