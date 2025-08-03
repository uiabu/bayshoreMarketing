import React from "react";
import Progress from "./Progress";
import Link from "next/link";

const Benefits = () => {
  return (
    <div className="bg-[#F4F4F4] py-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-center mb-4">
            Benefits of Choosing Us
          </h2>

          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            We offer creative solutions, data-driven strategies, and measurable
            results for your digital marketing needs. Choose us and grow your
            business online.
          </p>
        </div>
        <div className="grid items-start grid-cols-1 gap-16 mt-12 md:grid-cols-2">
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">
              Get Advantage and Access to <br /> Our Tools and Expertise
            </h3>

            <p className="text-base text-[gray]">
              Unlock excellence with Bayshore Communication&apos;s core
              services. From Growth Marketing to Software Solution and
              Development, Offshore Office, and Content Development, we&apos;re
              your path to exceptional results. Don&apos;t settle for less – our
              cutting-edge tools and experienced team will help you achieve your
              digital marketing goals faster and easier. Get ahead of the
              competition by getting in touch with us today, and experience the
              difference in our comprehensive approach.
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
              title="Software Solution and Development"
              bg="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[96%]"
              percentageVal="96%"
              percentageValpx="sm:left-[87%] left-[86%] md:left-[86%] lg:left-[90%]"
            />
            <Progress
              title="Offshore Office"
              bg="bg-gradient-to-r from-[#11998E] to-[#38EF7D]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[92%]"
              percentageVal="92%"
              percentageValpx="sm:left-[83%] left-[82%] md:left-[82%] lg:left-[86%]"
            />
            <Progress
              title="Content Development"
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
