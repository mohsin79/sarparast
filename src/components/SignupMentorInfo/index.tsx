import { Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  settingsImage?: string;
  signupText?: React.ReactNode;
  exploreText?: React.ReactNode;
}

export default function SignupMentorInfo({
  settingsImage = "images/boat_teal.svg",
  signupText = "Sign up and tell us your dream company",
  exploreText = "Explore our growing catalogue of experienced mentors until you find the perfect fit.",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={` ${props.className} flex flex-col w-[32%] md:w-full gap-6 p-8 sm:p-5 border-blue_gray-100 border border-solid bg-white-a700 rounded-[16px]`}
    >
      <Img src={settingsImage} alt="Image" className="h-[40px]" />
      <div className="mb-9 flex flex-col gap-2 self-stretch">
        <Heading
          size="headings"
          as="h5"
          className="text-[20px] font-bold leading-8 !text-gray-900_02"
        >
          {signupText}
        </Heading>
        <Heading as="p" className="text-[16px] font-medium leading-7">
          {exploreText}
        </Heading>
      </div>
    </div>
  );
}
