import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div
      className="min-h-fit py-10 bg-black text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >
      <div className="container flex flex-col items-center justify-center mx-auto px-4 py-8">
        <h4 className="text-white text-2xl  lg:text-3xl font-semibold text-center mb-6 max-w-5xl mx-auto">
          From customization to communication, our project organizermakes
          everything simpler—Get started today!
        </h4>
        <div className="text-center mt-4">
          <Link href="/contact">
            <button className="inline-block bg-[#241836] text-white px-8  py-3  text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Send Us a Proposal <span className="text-xl"> »</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
