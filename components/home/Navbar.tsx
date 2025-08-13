import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-black py-4 flex justify-center mb-5 lg:mb-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={230} height={50} />
        </Link>
      </div>
      <div className="container">
        <h2 className="bg-[#FE641A] py-4 text-center  text-base lg:text-xl font-semibold text-white uppercase">
          ATTENTION : Law Firm Owners Only
        </h2>
      </div>
    </>
  );
};

export default Navbar;
