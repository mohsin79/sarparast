import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CareerSuccessSection from "./CareerSuccessSection";
import HeroSection from "./HeroSection";
import LogoSection from "./LogoSection";
import MentorshipOverviewSection from "./MentorshipOverviewSection";
import MentorshipPromotionSection from "./MentorshipPromotionSection";
import MentorshipSection from "./MentorshipSection";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    signupAnd: "Sign up and tell us your dream company",
  },
  {
    signupAnd: "Sign up and tell us your dream company",
  },
  {
    signupAnd: "Sign up and tell us your dream company",
  },
  {
    signupAnd: "Sign up and tell us your dream company",
  },
];

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Sarparast</title>
        <meta
          name="description"
          content="Join Sarparast's mentorship platform to gain skills, make connections, and land your dream job. Get personalized guidance from top industry professionals. Sign up for a free trial and start your journey to career success today."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="relative h-[1002px] content-center md:h-auto">
          <div className="h-[1002px] w-full bg-[url(/public/images/pink_bg.png)] bg-cover bg-no-repeat" />
          <Header />
          <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 flex-col gap-20 md:gap-[60px] sm:gap-10">
            {/* hero section */}
            <HeroSection />
            <div className="mb-20 flex flex-col items-center justify-center gap-6">
              <div className="container-xs flex flex-col items-center px-14 md:px-5">
                <Heading
                  as="h4"
                  className="text-[16px] font-medium !text-gray-900_02"
                >
                  Learn from experts working in top companies
                </Heading>
              </div>
              {/* logo section */}
              <LogoSection />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="self-stretch bg-white-a700 py-[158px] md:py-5">
            {/* mentorship promotion section */}
            <MentorshipPromotionSection />
          </div>
          <div className="flex flex-col gap-40 self-stretch md:gap-[120px] sm:gap-20">
            {/* mentorship section */}
            <MentorshipSection />
            {/* mentorship overview section */}
            <MentorshipOverviewSection />
          </div>
          <div className="flex flex-col items-center justify-center self-stretch bg-white-a700 py-[158px] md:py-5">
            <div className="container-xs flex flex-col items-center gap-[46px] px-14 md:px-5">
              <Heading
                size="headingmd"
                as="h2"
                className="text-[40px] font-bold tracking-[-0.80px] !text-gray-900_02 md:text-[38px] sm:text-[36px]"
              >
                Frequently asked questions
              </Heading>
              <Accordion
                preExpanded={[0]}
                className="flex w-[76%] flex-col gap-4"
              >
                {accordionData.map((d: any, i) => (
                  <AccordionItem uuid={i} key={`expandablelists${i}`}>
                    <div className="flex flex-1 flex-col gap-2 rounded-[16px] border border-solid border-blue_gray-100 bg-white-a700 p-4">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-wrap items-center justify-between gap-5 sm:flex-col">
                                  <Heading
                                    size="headings"
                                    as="h3"
                                    className="self-end text-[20px] font-bold !text-pink-600"
                                  >
                                    {d.signupAnd}
                                  </Heading>
                                  {props?.expanded ? (
                                    <Img
                                      src="images/close_icon.svg"
                                      alt="CloseIcon"
                                      className="h-[3px] sm:w-full"
                                    />
                                  ) : (
                                    <Img
                                      src="images/add_icon.svg"
                                      alt="AddIcon"
                                      className="h-[15px] sm:w-full"
                                    />
                                  )}
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="mr-8 md:mr-0">
                          <Heading
                            as="h4"
                            className="text-[16px] font-medium leading-7"
                          >
                            Pick from a curated collection of mentors and
                            services. Try them out for 7 days with no
                            obligation. Found your mentoring sessions useful?
                            Move to a low-cost, monthly mentoring subscription.
                            No lock-ins, no hidden fees - Just accelerated
                            professional growth.
                          </Heading>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <CareerSuccessSection />
          <div className="container-xs mt-16 md:px-5">
            <div className="flex md:flex-col">
              {/* <Heading
                as="h2"
                className="mb-5 mt-[106px] w-[18%] text-center text-[16px] font-medium leading-7 md:w-full"
              >
                Get the first 7 days free, with every mentor
              </Heading> */}

              <div className="mb-7 flex w-[25%] flex-col items-center gap-[30px] md:w-full">
                <Img
                  src="images/img_magnifying_glass.svg"
                  alt="Magnifying"
                  className="h-[36px] md:mx-0"
                />
                <div className="flex flex-col items-center gap-1 self-stretch">
                  <Heading
                    size="textmd"
                    as="h4"
                    className="text-[20px] font-medium text-gray-900_02"
                  >
                    Free trial
                  </Heading>
                  <Heading
                    as="h5"
                    className="self-stretch text-center text-[16px] font-medium leading-7"
                  >
                    Get the first 7 days free, with every mentor
                  </Heading>
                </div>
              </div>

              <div className="mb-7 flex w-[25%] flex-col items-center gap-[30px] md:w-full">
                <Img
                  src="images/img_edit.svg"
                  alt="Edit"
                  className="h-[36px]"
                />
                <div className="flex flex-col items-center gap-1 self-stretch">
                  <Heading
                    size="textmd"
                    as="h4"
                    className="text-[20px] font-medium text-gray-900_02"
                  >
                    No Strings
                  </Heading>
                  <Heading
                    as="h5"
                    className="self-stretch text-center text-[16px] font-medium leading-7"
                  >
                    Cancelling is simple and can be done anytime
                  </Heading>
                </div>
              </div>
              {/* <Heading
                as="h6"
                className="mt-[100px] w-[18%] text-center text-[16px] font-medium leading-7 md:w-full"
              >
                We demand the highest quality service from our mentors
              </Heading> */}

              <div className="mb-7 flex w-[25%] flex-col items-center gap-[30px] md:w-full">
                <Img
                  src="images/img_bars.svg"
                  alt="Bars"
                  className="h-[36px]"
                />
                <div className="flex flex-col items-center gap-1 self-stretch">
                  <Heading
                    size="textmd"
                    as="h4"
                    className="text-[20px] font-medium text-gray-900_02"
                  >
                    Fully vetted
                  </Heading>
                  <Heading
                    as="h5"
                    className="self-stretch text-center text-[16px] font-medium leading-7"
                  >
                    We demand the highest quality service from our mentors
                  </Heading>
                </div>
              </div>

              {/* <div className="mb-[88px] flex w- [10%] flex-col items-center gap-[30px] md:w-full">
                <Img
                  src="images/img_bars.svg"
                  alt="Bars"
                  className="h-[36px]"
                />
                <Heading
                  size="textmd"
                  as="p"
                  className="text-[20px] font-medium text-gray-900_02"
                >
                  Fully vetted
                </Heading>
              </div> */}
              <div className="mb-7 flex w-[25%] flex-col items-center gap-[30px] md:w-full">
                <Img
                  src="images/img_edit.svg"
                  alt="Edit"
                  className="h-[36px]"
                />
                <div className="flex flex-col items-center gap-1 self-stretch">
                  <Heading
                    size="textmd"
                    as="p"
                    className="text-[20px] font-medium text-gray-900_02"
                  >
                    No Strings
                  </Heading>
                  <Heading
                    as="p"
                    className="self-stretch text-center text-[16px] font-medium leading-7"
                  >
                    Cancelling is simple and can be done anytime
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
