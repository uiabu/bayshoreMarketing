import Benefits from "@/components/home/Benefits";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import React from "react";
export const metadata = {
  title: " Bayshore Marketing",
  description:
    "Bayshore Marketing is a leading digital marketing agency specializing in helping businesses grow their online presence and achieve their marketing goals.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

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
