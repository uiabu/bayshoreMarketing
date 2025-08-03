import React from "react";

const Footer = () => {
  return (
    <footer className="text-[#2F2F2F] text-center text-sm px-4 py-6 lg:py-10">
      <div className="container ">
        <p className="mb-6 text-base">©2025 Bayshore Communication</p>
        <p className="mb-6 text-base ">
          This website is not part of the YouTube, Google, or Facebook website;
          Google Inc or Facebook Inc. Also, this website is NOT endorsed by
          YouTube, Google or Facebook in any way. FACEBOOK is a trademark of
          FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.
        </p>
        <p className="mb-6 text-base ">
          Bayshore Communication is a marketing and sales education and training
          company. We do not sell a business opportunity, “get rich quick”
          program or money-making system. We believe, with education,
          individuals can be better prepared to make investment decisions, but
          we do not guarantee success in our training. We do not make earnings
          claims, efforts claims, or claims that our training will make you any
          money. All material is intellectual property and protected by
          copyright. Any duplication, reproduction, or distribution is strictly
          prohibited. Please see our Full Disclosure for important details.
        </p>
        <p className="mb-6 text-base ">
          Statements and depictions are the opinions, findings, or experiences
          of individuals who generally have purchased education and training.
          Results vary, are not typical, and rely on individual effort, time,
          and skill, as well as unknown conditions and other factors. We do not
          measure earnings or financial performance. Instead, we track completed
          transactions and satisfaction of services by voluntary surveys.
          Results show that most Advanced Training clients who apply the
          training. You should not, however, equate completed sales closing
          transactions with financially successful transactions. Further, many
          customers do not continue with the program, do not apply what they
          learn, or do attempt to apply what they learn but nonetheless have
          difficulty in making marketing and sales successful for them.
        </p>
        <p className="mb-6 text-base ">
          We use cookies to help improve, promote and protect our services. By
          continuing to use this site, you agree to our privacy policy and terms
          of use. This site is not a part of Facebook website or Facebook, Inc.
          This site is NOT endorsed by Facebook in any way. FACEBOOK is a
          trademark of FACEBOOK, Inc.
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
