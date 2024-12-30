import { Img, Heading, Button, Input } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div className="mx-[278px] flex justify-center md:mx-0">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
          <div className="flex flex-1 flex-col gap-[54px] md:self-stretch sm:gap-[27px]">
            <div className="mr-7 flex flex-col gap-[22px] md:mr-0">
              <Heading
                size="headinglg"
                as="h1"
                className="text-[48px] font-bold leading-[58px] !text-indigo-300 md:text-[44px] sm:text-[38px]"
              >
                <span className="text-gray-900_02">
                  Make connections. Gain skills. Get your&nbsp;
                </span>
                <span className="text-indigo-a200">dream job</span>
              </Heading>
              <Heading
                size="textmd"
                as="h2"
                className="text-[20px] font-normal leading-6 !text-gray-900_02"
              >
                Tired of applying for jobs with no response? Get yourself
                mentored by the very people working at your dream company.
              </Heading>
            </div>
            <div className="mr-7 flex flex-col gap-6 md:mr-0">
              <div className="relative h-[74px] content-center md:h-auto">
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="rounded-1g px-6"
                />
                <Button
                  shape="round"
                  className="absolute bottom-0 right-[25px] top-0 my-auto min-w-[168px] rounded-1g px-[34px] sm:px-5"
                >
                  Join for Free
                </Button>
              </div>
              <div className="flex">
                <Heading
                  as="h3"
                  className="flex self-end text-[16px] font-medium text-gray-900_02"
                >
                  <span className="text-gray-900_02">
                    Interested in joining our team of mentors?&nbsp;
                  </span>
                  <a href="#" className="inline text-pink-600 underline">
                    Sign up to become a mentor now.
                  </a>
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex w-[40%] justify-center gap-2 md:w-full sm:flex-col">
            <div className="flex w-full flex-col gap-4 sm:w-full">
              <div className="relative h-[200px] content-center md:h-auto">
                <Img
                  src="images/careem_mentor.png"
                  alt="CareemMentor"
                  className="ml-auto h-[200px] flex-1 rounded-lg object-cover"
                />
                <div className="absolute bottom-[9px] left-[16%] m-auto flex rounded-lg border border-solid border-blue_gray-100 bg-white-a700 px-2 py-3">
                  <Img
                    src="images/careem_logo.svg"
                    alt="Careemlogo"
                    className="h-[20px] w-full md:h-auto"
                  />
                </div>
              </div>
              <div className="relative h-[278px] content-center md:h-auto">
                <Img
                  src="images/10P_mentor.png"
                  alt="10PMentor"
                  className="ml-auto h-[278px] flex-1 rounded-lg object-cover"
                />
                <div className="absolute bottom-3 left-[16%] m-auto flex rounded-lg border border-solid border-blue_gray-100 bg-white-a700 p-2">
                  <Img
                    src="images/10p_logo.svg"
                    alt="10Plogo"
                    className="h-[28px] w-full md:h-auto"
                  />
                </div>
              </div>
              <Img
                src="images/mentor_1.png"
                alt="Image"
                className="h-[76px] rounded-lg object-cover md:ml-0"
              />
            </div>
            <div className="flex w-full flex-col gap-4 sm:w-full">
              <div>
                <div className="flex flex-col items-start">
                  <div className="relative z-[1] ml-[18px] flex rounded-lg border border-solid border-blue_gray-100 bg-white-a700 p-2 md:ml-0">
                    <Img
                      src="images/affinity_logo.svg"
                      alt="AffinityLogo"
                      className="h-[28px] w-full md:h-auto"
                    />
                  </div>
                  <Img
                    src="images/mentor_2.png"
                    alt="Image"
                    className="relative mt-[-44px] h-[56px] w-full rounded-lg object-cover md:ml-0 md:h-auto"
                  />
                </div>
              </div>
              <div className="relative h-[278px] content-center md:h-auto">
                <Img
                  src="images/venturedive_mentor.png"
                  alt="Image"
                  className="ml-auto h-[278px] flex-1 rounded-lg object-cover"
                />
                <div className="absolute bottom-2.5 left-[18px] m-auto flex rounded-lg border border-solid border-blue_gray-100 bg-white-a700 px-2 py-2.5">
                  <Img
                    src="images/venturedive_logo.svg"
                    alt="Venturedive"
                    className="h-[26px] w-full md:h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <Img
                  src="images/mentor_3.png"
                  alt="Image"
                  className="h-[222px] w-full rounded-lg object-cover md:ml-0 md:h-auto"
                />
                <div className="ml-[18px] w-[56%] border-solid border-blue_gray-100 bg-white-a700 md:ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
