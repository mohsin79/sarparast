import { Heading, Button, Img } from "../../components";
import React from "react";
export default function MentorshipSection() {
  return (
    <>
      {/* mentorship section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-20 md:gap-[60px] md:px-5 sm:gap-10">
          <div className="flex gap-4 self-stretch md:flex-col">
            <div className="flex flex-1 flex-col gap-10 rounded-[16px] border border-solid border-blue-gray-100 bg-gray-50 p-8 md:self-stretch sm:p-5">
              <Img
                src="images/chat_screen.png"
                alt="Chatscreen"
                className="h-[430px] object-fit"
              />
              <div className="mb-2 flex flex-col gap-8">
                <Heading
                  size="headings"
                  as="h2"
                  className="text-[32px] font-bold leading-[38px] text-gray-900_02 md:text-[38px] sm:text-[28px]"
                >
                  Personalized mentorship for your dream job.
                </Heading>
                <div className="flex flex-col gap-8">
                  <Heading
                    as="h3"
                    className="text-[16px] font-medium leading-7"
                  >
                    Ask questions, kick the tires on a new idea, or discuss
                    professional progress and improvements in your online
                    mentoring sessions with unlimited messaging.
                  </Heading>
                  <Heading
                    as="h4"
                    className="text-[16px] font-medium leading-7"
                  >
                    Have an upcoming interview at Folio3? Need help in product
                    management or marketing? Whatever it is, our online mentors
                    are there for you.
                  </Heading>
                  <Heading
                    size="headingxs"
                    as="h5"
                    className="text-[16px] font-bold leading-6"
                  >
                    Fewer interruptions in your day-to-day and easier
                    documentation. A text away, get expert guidance at your
                    convenience from your mentor.
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex w-[40%] flex-col gap-4 md:w-full">
              <div className="flex flex-col gap-10 rounded-[16px] border border-solid border-blue-gray-100 bg-gray-50 p-8 sm:p-5">
                <Img
                  src="images/insights_img.png"
                  alt="InsightsImg"
                  className="h-[102px] object-cover"
                />
                <div className="mb-2 flex flex-col gap-8">
                  <Heading
                    size="headings"
                    as="h2"
                    className="text-[32px] font-bold leading-[38px] !text-gray-900_02 md:text-[30px] sm:text-[28px]"
                  >
                    Insider insights and industry-specific guidance.
                  </Heading>
                  <Heading as="p" className="text-[16px] font-medium leading-7">
                    Get invaluable knowledge from veterans and founders. Through
                    effective mentorship, eliminate the time spent on figuring
                    out your next steps.
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col gap-10 rounded-[16px] border border-solid border-blue-gray-100 bg-gray-50 p-8 sm:p-5">
                <Img
                  src="images/network_img.png"
                  alt="NetworkImg"
                  className="h-[64px] object-cover"
                />
                <div className="mb-2 flex flex-col gap-8">
                  <Heading
                    size="headings"
                    as="h2"
                    className="text-[32px] font-bold leading-[38px] !text-gray-900_02 md:text-[30px] sm:text-[28px]"
                  >
                    Build a network with professionals at top companies.
                  </Heading>
                  <Heading as="p" className="text-[16px] font-medium leading-7">
                    Get invaluable knowledge from veterans and founders. Through
                    effective mentorship, eliminate the time spent on figuring
                    out your next steps.
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[26%] justify-center gap-4 md:w-full">
            <Button
              shape="round"
              className="min-w-[102px] rounded-lg px-6 sm:px-5"
            >
              Join us
            </Button>
            <div className="flex flex-1 justify-center p-2">
              <Heading
                as="p"
                className="self-end text-[16px] font-medium !text-pink-600 underline"
              >
                Become a mentor
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
