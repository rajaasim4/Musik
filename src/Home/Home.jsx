import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Layout/About/About";
import Banner from "../Layout/Banner/Banner";
import Category from "../Layout/Category/Category";
import Contact from "../Layout/Contact/Contact";
import Price from "../Layout/Price/Price";
import Shorts from "../Layout/Shorts/Shorts";
import Singers from "../Layout/Singers/Singers";
import Sponsor from "../Layout/Sponsors/Sponsor";
import Testimonials from "../Layout/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <About />
      <Singers />
      <Price />
      <Sponsor />
      <Testimonials />
      <Shorts />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
