import ContactForm from "@/components/contact/ContactForm";
import GrowthCallPage from "@/components/contact/GrowthCallPage";
import Map from "@/components/contact/Map";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: " Bayshore Marketing",
  description:
    "Bayshore Marketing is a leading digital marketing agency specializing in helping businesses grow their online presence and achieve their marketing goals.",
};

const page = () => {
  return (
    <div>
      <div className="bg-black py-4 flex justify-center mb-5 lg:mb-10">
        <div className="container flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between ">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={230} height={50} />
          </Link>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-4xl">
            <div
              className="bg-[#FE641A] text-xs font-medium text-blue-100 text-center py-2 leading-none rounded-full"
              style={{ width: "80%" }}
            >
              Step 2 of 2 - Schedule Your Free Growth Call
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="bg-[#FE641A] py-4 text-center text-base lg:text-xl font-semibold text-white uppercase">
          ATTENTION : Law Firm Owners Only
        </h2>
      </div>

      <GrowthCallPage />
      <Footer />
    </div>
  );
};

export default page;
