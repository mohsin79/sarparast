import { Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userTitle?: React.ReactNode;
  mentorshipLabel?: React.ReactNode;
  mentorshipPrice?: React.ReactNode;
  introSessionLabel?: React.ReactNode;
  introSessionPrice?: React.ReactNode;
  cvReviewLabel?: React.ReactNode;
  cvReviewPrice?: React.ReactNode;
  portfolioReviewLabel?: React.ReactNode;
  portfolioReviewPrice?: React.ReactNode;
}

export default function UserProfile({
  userName = "Asad Raza Zaidi",
  userTitle,
  mentorshipLabel = "Mentorship",
  mentorshipPrice = "PKR 4,000/month",
  introSessionLabel = "Intro Session",
  introSessionPrice = "PKR 4,000",
  cvReviewLabel = "CV Review",
  cvReviewPrice = "PKR 4,000",
  portfolioReviewLabel = "Portfolio Review",
  portfolioReviewPrice = "PKR 4,000",
  ...props
}: Props) {
  return (
    <div
      className={` ${props.className} flex flex-col justify-center w-[32%] md:w-full gap-4 px-5 py-7 sm:py-5 bg-white-a700 rounded-[12px]`}
    >
      <div className="flex flex-col gap-4 self-stretch">
        <div className="flex items-start justify-between gap-5">
          <div className="flex w-[72%] flex-col items-start gap-1.5 self-center">
            <Heading
              size="textmd"
              as="p"
              className="text-[20px] font-medium !text-gray-900_03"
            >
              {userName}
            </Heading>
            <Heading as="p" className="text-[16px] font-medium leading-7">
              <span>
                <>
                  Senior Full Stack Dev
                  <br />
                </>
              </span>
              <span className="font-bold">-</span>
              <span className="font-bold">10 Pearls</span>
            </Heading>
          </div>
          <Img
            src="images/10P_mentor.png"
            alt="Asad_Raza_Zaidi"
            className="h-[56px] w-[18%] rounded-[10px] object-contain"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-5 rounded-lg bg-gray-100 px-3 py-2">
          <Heading as="p" className="text-[14px] font-normal">
            {mentorshipLabel}
          </Heading>
          <Heading
            size="headingxs"
            as="p"
            className="text-[14px] font-bold !text-indigo-a200"
          >
            {mentorshipPrice}
          </Heading>
        </div>
      </div>
      <div className="h-[2px] self-stretch rounded-[1px] bg-gray-200" />
      <div className="flex flex-wrap justify-between gap-5 self-stretch rounded-lg bg-gray-100 px-3 py-2">
        <Heading as="p" className="text-[14px] font-normal">
          {introSessionLabel}
        </Heading>
        <Heading size="headingxs" as="p" className="text-[14px] font-bold">
          {introSessionPrice}
        </Heading>
      </div>
      <div className="flex flex-wrap justify-between gap-5 self-stretch rounded-lg bg-gray-100 px-3 py-2">
        <Heading as="p" className="text-[14px] font-normal">
          {cvReviewLabel}
        </Heading>
        <Heading size="headingxs" as="p" className="text-[14px] font-bold">
          {cvReviewPrice}
        </Heading>
      </div>
      <div className="flex flex-wrap justify-between gap-5 self-stretch rounded-lg bg-gray-100 px-3 py-2">
        <Heading as="p" className="text-[14px] font-normal">
          {portfolioReviewLabel}
        </Heading>
        <Heading size="headingxs" as="p" className="text-[14px] font-bold">
          {portfolioReviewPrice}
        </Heading>
      </div>
    </div>
  );
}
