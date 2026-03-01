import React from "react";
import Navbar from "../Components/Navbar";
import WhyChooseSection from "../Components/WhyChooseSection";
import ClientSolutions from "../Components/ClientSolutions";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <ClientSolutions />
      <WhyChooseSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;