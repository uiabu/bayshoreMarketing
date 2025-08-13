import React from "react";
import Progress from "./Progress";
import Link from "next/link";

const Benefits = () => {
  return (
    <div className="bg-[#F4F4F4] py-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-center mb-4 max-w-3xl">
            Why Top Law Firms Choose Bayshore Communication
          </h2>

          <p className="text-base !text-center max-w-5xl mx-auto mb-10">
            We specialize in one thing — helping law firms grow faster, more
            predictably, and with higher-quality cases. With proven legal
            marketing strategies, we connect you with the right clients, in the
            right locations, at the right time. No generic campaigns. No wasted
            ad spend. Just measurable results.
          </p>
        </div>
        <div className="grid items-start grid-cols-1 gap-16 mt-12 md:grid-cols-2">
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">
              Benefits of Working With Us
            </h3>

            <p className="text-base text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Exclusive Legal Marketing Expertise</strong> – We know
                  how clients search for lawyers and how to position you as
                  their first choice.
                </li>
                <li>
                  <strong>Data-Driven Results</strong> – Every dollar is
                  tracked, optimized, and tied to actual case conversions.
                </li>
                <li>
                  <strong>Proven Systems</strong> – From first click to signed
                  retainer, we build a seamless client journey.
                </li>
              </ul>
            </p>

            <div className="text-start mt-4 lg:mt-8">
              <Link href="/contact">
                <button className="inline-block bg-[#FE641A] text-white px-8  py-3  text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  Send Us a Proposal <span className="text-xl"> »</span>
                </button>{" "}
              </Link>
            </div>
          </div>

          <div className=" flex flex-col gap-8 lg:gap-12 md:pl-[5rem] sm:px-[15vw] md:px-0">
            <Progress
              title="Growth Marketing"
              bg="bg-gradient-to-r from-[#D4145A] to-[#FBB03B]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[90%]"
              percentageVal="90%"
              percentageValpx="sm:left-[82%] left-[80%] md:left-[80%] lg:left-[84%]"
            />
            <Progress
              title="Content Creation
"
              bg="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[96%]"
              percentageVal="96%"
              percentageValpx="sm:left-[87%] left-[86%] md:left-[86%] lg:left-[90%]"
            />
            <Progress
              title="CRM Integration
"
              bg="bg-gradient-to-r from-[#11998E] to-[#38EF7D]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[92%]"
              percentageVal="92%"
              percentageValpx="sm:left-[83%] left-[82%] md:left-[82%] lg:left-[86%]"
            />
            <Progress
              title="Automation
"
              bg="bg-gradient-to-r from-[#FF61D2] to-[#FE9090]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[88%]"
              percentageVal="88%"
              percentageValpx="sm:left-[80%] md:left-[78%] lg:left-[82%] left-[78%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
