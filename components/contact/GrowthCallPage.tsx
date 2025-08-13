"use client";

import React from "react";
import CalendlyInfoShow from "./CalendlyInfoShow";

export default function GrowthCallPage() {
  return (
    <div>
      <div>
        <div className="container flex flex-col items-center text-center gap-6  lg:gap-10">
          <div className="flex flex-col items-center text-center gap-6 mt-10">
            <h1 className="text-2xl  lg:text-4xl font-medium leading-tight max-w-6xl px-4">
              You're One Step Away From Learning How Your Can
              <span className="text-[#FE641A] font-bold px-2">
                Fill Your Pipeline With 100+ Qualified Appointments Every Single
                Month. 100% Guaranteed
              </span>
            </h1>
            <hr className="w-[45%] mx-auto" />
            <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-2">
              <span className="text-[#FE641A] font-bold px-2">
                Step 1 of 2:
              </span>{" "}
              Watch Video
            </h3>
            <div className="w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden ">
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
            <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mt-2">
              <span className="text-[#FE641A] font-bold ">Step 2 of 2:</span>{" "}
              Schedule Your Free Growth Call
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl font-medium">
              Your answers will remain completely confidential and are used to
              prepare a tailored strategy for your firm before the call.
            </p>
            <p className="text-gray-600 text-lg lg:text-xl font-bold">
              If you can't see any open slots, click “See times next month.”
            </p>
          </div>{" "}
          {/* Calendar Section */}
          <CalendlyInfoShow />
        </div>
        <div className="bg-[#F4F4F4] py-16">
          <div className="container">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-center ">
                Benefits of Choosing Us
              </h2>
            </div>
            <div className="grid items-start grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 justify-stretch">
              <div className=" flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-4 lg:text-6xl">📞</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  Booking Appointments
                </h3>
                <p className="text-gray-600 text-base lg:text-lg">
                  How to generate 300+ qualified client inquiries in your first
                  90 days without wasting money on unqualified leads using a
                  proven strategy designed for law firms only.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-4 lg:text-6xl">🚀</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  Client Delivery & Scaling
                </h3>
                <p className="text-gray-600 text-base lg:text-lg">
                  How to create a client experience that keeps people referring
                  you for years — while reducing your personal workload and
                  freeing time for high-value cases.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-4 lg:text-6xl">💼</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  Sales Mastery
                </h3>
                <p className="text-gray-600 text-base lg:text-lg">
                  How to implement a simple, repeatable intake and sales process
                  that turns consultations into signed retainers — the same
                  system that has helped us deliver 3,000+ new client cases in
                  under four years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
