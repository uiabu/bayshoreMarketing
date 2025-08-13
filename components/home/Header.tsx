"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "../common/ContactModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="container mx-auto h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 w-full">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight max-w-5xl px-4">
              Learn How to Fill Your Calendar With
              <span className="text-[#FE641A] font-bold px-2">
                20–50+ High-Value Legal Clients
              </span>
              Every Single Month
              <span className="text-[#FE641A] font-bold px-2">Guaranteed </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-gray-600 max-w-3xl px-4 text-center">
              If you’re not a law firm owner, this training will not be relevant
              for you.
            </p>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-[#FE641A] text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Send Us a Proposal <span className="text-xl"> »</span>
              </button>
            </div>
          </div>
          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden mt-8">
            <iframe
              src="https://www.youtube.com/embed/pQD5jqtRjFI?si=VvKyAtlzdjLpXp9p"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Devit Carter"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 mt-10">
            <div>
              <Image
                src="/images/ia.png"
                alt="Image 1"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h3 className="text-[#FE641A] text-4xl font-semibold">2500+</h3>
              <p className="text-gray-600 text-xl font-medium">
                Verified Case Studies & <br />
                Testimonials
              </p>
            </div>
            <div>
              <h3 className="text-[#FE641A] text-4xl font-semibold">$50M+</h3>
              <p className="text-gray-600 text-xl font-medium">
                In Client-Generated <br /> Legal Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
