import { Heading, Button } from "../../components";
import SignupMentorInfo from "../../components/SignupMentorInfo";
import React, { Suspense } from "react";

const mentorshipSignupList = [
  {
    settingsImage: "images/boat_teal.svg",
    signupText: "Sign up and tell us your dream company",
    exploreText:
      "Explore our growing catalogue of experienced mentors until you find the perfect fit.",
  },
  {
    settingsImage: "images/edit_yellow.svg",
    signupText: "Browse and connect with mentors from that company",
    exploreText:
      "Fill in an application, and if you're a match with your chosen mentor you can start your free 7-day trial.",
  },
  {
    settingsImage: "images/rocket_blue.svg",
    signupText: "Elevate your skills with personalized mentorship",
    exploreText:
      "From personal chats to hands-on support, each mentor offers different services to help you skyrocket your career.",
  },
];

export default function MentorshipPromotionSection() {
  return (
    <div className="flex flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-14 px-[30px] md:px-5 sm:gap-7">
          <div className="mx-[148px] flex flex-col items-center gap-3.5 md:mx-0">
            <Heading
              size="headingmd"
              as="h2"
              className="text-[48px] font-bold tracking-[-0.88px] text-gray-900 md:text-[38px] sm:text-[36px]"
            >
              No more hassle in job search.
            </Heading>
            <Heading
              as="h3"
              className="self-stretch text-center text-[16px] font-medium leading-7"
            >
              Want to ace your next job interview? Successfully build your
              startup? Itching to learn high-demand skills? Work smart with an
              online mentor or coach by your side to offer expert advice and
              guidance to match your zeal. Become unstoppable using Sarpaprast.
            </Heading>
          </div>
          <div className="flex gap-10 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {mentorshipSignupList.map((d, index) => (
                <SignupMentorInfo {...d} key={"listsignup" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
      <div className="container-xs flex flex-col items-center px-14 md:px-5">
        <div className="flex w-[38%] justify-center gap-4 md:w-full sm:flex-col">
          <Button
            shape="round"
            className="min-w-[194px] rounded-lg px-6 sm:px-5"
          >
            Get your dream job
          </Button>
          <div className="flex w-full justify-center p-2 sm:w-full">
            <Heading
              as="h4"
              className="self-end text-[16px] font-medium text-pink-600 underline"
            >
              Become a mentor
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
