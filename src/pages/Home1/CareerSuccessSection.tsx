import { Img, Button, Heading } from "../../components";
import React from "react";
export default function CareerSuccessSection() {
  return (
    <>
      {/* career success section */}
      <div className="relative h-[484px] self-stretch">
        <div className="container-xs absolute bottom-0 left-0 right-0 flex md:px-5">
          <div className="flex w-full flex-col items-end gap-14 rounded-[12px] bg-blue_gray-900 p-10 sm:gap-7 sm:p-5">
            <div className="mr-[72px] flex w-[70%] flex-col items-start gap-10 md:mr-0 md:w-full">
              <div className="flex flex-col items-start justify-center gap-3 self-stretch">
                <Heading
                  size="headings"
                  as="h2"
                  className="text-[32px] font-bold !text-white-a700 md:text-[30px] sm:text-[28px]"
                >
                  Be first in line for career success
                </Heading>
                <Heading
                  as="h3"
                  className="text-[16px] font-medium !text-white-a700"
                >
                  Join the Sarparast waitlist for early access to tailored
                  mentorship
                </Heading>
              </div>
              <Button
                shape="round"
                className="min-w-[170px] rounded-1g px-6 sm:px-5"
              >
                Join the Waitlist
              </Button>
            </div>
            <div className="mb-4 flex flex-col gap-[54px] self-stretch sm:gap-[27px]">
              <div className="h-px bg-blue_gray-100" />
              <div className="mx-[52px] flex gap-12 md:mx-0 md:flex-col">
                <Img
                  src="images/venturedive_logo_white.svg"
                  alt="VenturediveLogo"
                  className="h-[32px] w-[24%] object-contain md:w-full"
                />
                <div className="flex w-[18%] md:w-full">
                  <Img
                    src="images/bykea_logo.svg"
                    alt="Bykealogoone"
                    className="h-[32px] w-full md:h-auto"
                  />
                </div>
                <Img
                  src="images/affinity_logo_white.svg"
                  alt="AffinityLogo"
                  className="h-[32px] w-[12%] object-contain md:w-full"
                />
                <Img
                  src="images/bazaar_logo_white.svg"
                  alt="BazaarLogo"
                  className="h-[32px] w-[6%] object-contain md:w-full"
                />
                <div className="flex w-[22%] md:w-full">
                  <Img
                    src="images/careem_logo.svg"
                    alt="Careemlogo"
                    className="h-[32px] w-full md:h-auto"
                  />
                </div>
                <Img
                  src="images/10p_logo_white.svg"
                  alt="10Plogo"
                  className="h-[32px] w-[14%] object-contain md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/mentor_4.png"
          alt="Mentor_4"
          className="absolute top-0 m-auto h-[308px] rounded-1g object-contain"
          style={{ left: "20.4%" }}
        />
      </div>
    </>
  );
}
