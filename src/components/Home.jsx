import React from "react";
import Header from "./partials/Header";
import Brands from "./Brands";
import About from "./About";
import Process from "./Process";
import Funding from "./Funding";
import Callus from "./Callus";
import Values from "./Values";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Newsletter from "./Newsletter";
import Footer from "./partials/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <About />
      <Process />
      <Funding />
      <Callus />
      <Values />
      <Services />
      <Testimonial />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
