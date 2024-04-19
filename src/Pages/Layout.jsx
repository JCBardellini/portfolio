import React from "react";
import * as Components from "../Components";
import Header from "../Components/Header/Header";
import Preloader from "../Components/preloader/preloader";

const { Navbar, About, Contact, Footer, Projects, Work } = Components;

const Layout = () => {
  return (
    <main id="pageLayout">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
