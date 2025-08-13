import React from "react";

const Footer = () => {
  return (
    <footer className="text-[#2F2F2F] text-center text-sm px-4 py-6 lg:py-10">
      <div className="container ">
        <p className="mb-6 text-base">©2025 Bayshore Communication</p>
        <p className="mb-6 text-base ">
          This website is not part of the YouTube, Google, or Facebook websites;
          Google Inc. or Facebook Inc. Also, this website is NOT endorsed by
          YouTube, Google, or Facebook in any way. FACEBOOK is a trademark of
          FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.
        </p>
        <p className="mb-6 text-base ">
          Bayshore Communication is a legal marketing and sales implementation
          company. We do not sell a business opportunity, “get rich quick”
          program, or money-making system. We believe, with proper strategy and
          execution, law firms can consistently attract high-quality cases — but
          results vary based on effort, market, and competition.
        </p>
        <p className="mb-6 text-base ">
          Statements and case results are based on actual law firm clients we’ve
          worked with. We do not guarantee specific earnings or case numbers, as
          every firm’s situation is unique. We measure success based on
          completed client intakes, case value, and satisfaction rates.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <a href="#" className="text-[#FE641A] hover:underline text-base">
            Privacy Policy
          </a>
          <span className="text-[#2F2F2F]">-</span>
          <a href="#" className="text-[#FE641A] hover:underline text-base">
            Terms & Conditions
          </a>
          <span className="text-[#2F2F2F]">-</span>
          <a href="#" className="text-[#FE641A] hover:underline text-base">
            Earnings Disclaimer
          </a>
          <span className="text-[#2F2F2F]">-</span>
          <a href="#" className="text-[#FE641A] hover:underline text-base">
            Data Protection
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
