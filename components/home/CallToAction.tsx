"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "../common/ContactModal";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div
      className="min-h-fit py-10 bg-black text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >
      <div className="container flex flex-col items-center justify-center mx-auto px-4 py-8">
        <div className="text-center mb-5 max-w-5xl">
          <h4 className="text-white text-2xl  lg:text-3xl font-semibold text-center mb-2 max-w-5xl mx-auto">
            From Consultation to Case Signed — We Make It Simple
          </h4>
          <p>
            Our dedicated project managers, legal marketing specialists, and
            automation experts work as your extended team to ensure every lead
            is handled quickly and professionally.
          </p>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-[#241836] text-white px-8  py-3  text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Send Us a Proposal <span className="text-xl"> »</span>
          </button>
        </div>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default CallToAction;
