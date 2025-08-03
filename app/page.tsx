import Benefits from "@/components/home/Benefits";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default page;
