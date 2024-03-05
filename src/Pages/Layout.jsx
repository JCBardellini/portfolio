import React from "react";
import * as Components from "../Components";
import Header from "../Components/Header/Header";

const { Navbar, About, Contact, Footer, FutureProjects, Home, Projects, Work } =
  Components;

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
