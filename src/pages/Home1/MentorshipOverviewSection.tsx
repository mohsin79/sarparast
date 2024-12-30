import { Heading, Button } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";
const mentorDetailsList = [
  {
    userName: "Asad Raza Zaidi",
    userTitle: (
      <>
        Senior Full Stack Dev
        <br />
        -10 Pearls
      </>
    ),
    mentorshipLabel: "Mentorship",
    mentorshipPrice: "PKR 4,000/month",
    introSessionLabel: "Intro Session",
    introSessionPrice: "PKR 4,000",
    cvReviewLabel: "CV Review",
    cvReviewPrice: "PKR 4,000",
    portfolioReviewLabel: "Portfolio Review",
    portfolioReviewPrice: "PKR 4,000",
  },
  {
    userName: "Asad Raza Zaidi",
    userTitle: (
      <>
        Senior Full Stack Dev
        <br />
        -10 Pearls
      </>
    ),
    mentorshipLabel: "Mentorship",
    mentorshipPrice: "PKR 4,000/month",
    introSessionLabel: "Intro Session",
    introSessionPrice: "PKR 4,000",
    cvReviewLabel: "CV Review",
    cvReviewPrice: "PKR 4,000",
    portfolioReviewLabel: "Portfolio Review",
    portfolioReviewPrice: "PKR 4,000",
  },
  {
    userName: "Asad Raza Zaidi",
    userTitle: (
      <>
        Senior Full Stack Dev
        <br />
        -10 Pearls
      </>
    ),
    mentorshipLabel: "Mentorship",
    mentorshipPrice: "PKR 4,000/month",
    introSessionLabel: "Intro Session",
    introSessionPrice: "PKR 4,000",
    cvReviewLabel: "CV Review",
    cvReviewPrice: "PKR 4,000",
    portfolioReviewLabel: "Portfolio Review",
    portfolioReviewPrice: "PKR 4,000",
  },
];

export default function MentorshipOverviewSection() {
  return (
    <>
      {/* mentorship overview section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-gradient py-[120px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-20 md:gap-[60px] md:px-5 sm:gap-10">
            <div className="mx-[178px] flex flex-col gap-[22px] self-stretch md:mx-0">
              <Heading
                size="headingmd"
                as="h1"
                className="text-center text-[40px] font-bold leading-[48px] tracking-[-0.80px] !text-gray-900_02 md:text-[38px] sm:text-[36px]"
              >
                <span className="text-gray-900_02">An arsenal of&nbsp;</span>
                <span className="text-indigo-a200">industry veterans</span>
                <span className="text-gray-900_02">
                  &nbsp; and mentoring packages at a&nbsp;
                </span>
                <span className="text-indigo-a200">flexible price</span>
                <span className="text-gray-900_02">.</span>
              </Heading>
              <Heading
                as="p"
                className="text-center text-[16px] font-medium leading-7"
              >
                Pick from a curated collection of mentors and services. Try them
                out for 7 days with no obligation. Found your mentoring sessions
                useful? Move to a low-cost, monthly mentoring subscription. No
                lock-ins, no hidden fees - Just accelerated professional growth.
              </Heading>
            </div>
            <div className="flex gap-[54px] self-stretch md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {mentorDetailsList.map((d, index) => (
                  <UserProfile {...d} key={"listasadrazazai" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex w-[32%] justify-center gap-4 md:w-full">
              <Button
                shape="round"
                className="min-w-[168px] rounded-lg px-6 sm:px-5"
              >
                Find my mentor
              </Button>
              <div className="flex w-full justify-center p-2">
                <Heading
                  as="p"
                  className="self-end text-[16px] font-medium ! text-pink-600 underline"
                >
                  Become a mentor
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
