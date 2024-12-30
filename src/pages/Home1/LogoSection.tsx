import { Img } from "../../components";
import React from "react";
export default function LogoSection() {
  return (
    <>
      {/* logo section */}
      <div className="flex w-full flex-col gap-[54px] overflow-hidden md:px-5 sm:gap-[27px]">
        <div className="container-xs">
          <div className="h-px bg-gray-700_33" />
        </div>
        <div className="flex gap-12 md:flex-col">
          <Img
            src="images/venturedive_logo.svg"
            alt="Venturedive"
            className="h-[32px] w-[176px] md:w-full"
          />
          <div className="flex w- [140px]">
            {" "}
            <Img
              src="images/bykea_logo.svg"
              alt="Bykealogoone"
              className="h-[33px] w-[124px] md:h-auto"
            />
          </div>
          <Img
            src="images/affinity_logo.svg"
            alt="AffinityLogo"
            className="h-[32px] w- [98px] md:w-full"
          />
          <Img
            src="images/bazaar_logo.svg"
            alt="BazaarLogo"
            className="h-[32px] w-[52px] md:w-full"
          />
          <div className="flex w-[160px]">
            {" "}
            <Img
              src="images/careem_logo.svg"
              alt="Careemlogo"
              className="h-[32px] w-full md:h-auto"
            />
          </div>
          <div className="flex w- [106px]">
            <Img
              src="images/10p_logo.svg"
              alt="10plogo"
              className="h-[32px] w-full md:h-auto"
            />
          </div>
          <div className="flex w-[140px]">
            {" "}
            <Img
              src="images/bykea_logo.svg"
              alt="Bykealogotwo"
              className="h-[32px] w-full md:h-auto"
            />
          </div>
          <Img
            src="images/affinity_logo.svg"
            alt="AffinityLogo"
            className="h-[32px] w- [98px] md:w-full"
          />
          <div className="flex w- [176px]">
            {" "}
            <Img
              src="images/venturedive_logo.svg"
              alt="Venturedive"
              className="h-[32px] w-full md:h-auto"
            />
          </div>
          <div className="flex w- [160px]">
            <Img
              src="images/careem_logo.svg"
              alt="Careemlogo"
              className="h-[32px] w-full md:h-auto"
            />
          </div>
          <Img
            src="images/10p_logo.svg"
            alt="10plogo"
            className="h-[32px] w- [106px] md:w-full"
          />
          <Img
            src="images/bazaar_logo.svg"
            alt="BazaarLogo"
            className="h-[32px] w-[52px] md:w-full"
          />
        </div>
      </div>
    </>
  );
}
