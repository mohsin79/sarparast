import { Heading, Img } from "./..";
import React from "react";
interface Props {
  className?: string;
}
export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={` ${props.className} flex self-stretch justify-center items-end mt-[120px] py-[38px] sm:py-5 border-blue_gray-100 border-t border-solid`}
    >
      <div className="container-xs mt-20 flex justify-center md:px-5">
        <div className="flex w-full flex-col items-center gap-[92px] md:gap-[69px] sm:gap-[46px]">
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[32%] flex-col items-start gap-8 md:w-full">
              <Img
                src="images/header_logo.png"
                alt="Footerlogo"
                className="h-[28px] w-[184px] object-contain"
              />
              <Heading
                size="texts"
                as="p"
                className="w- [96%] text-[16px] font-medium leading-6 md:w-full"
              >
                Your trusted source to find highly-vetted mentors & industry
                professionals to move your career ahead.
              </Heading>
              <div className="flex gap-5">
                <Img
                  src="images/img_twitter.svg"
                  alt="TwitterIcon"
                  className="h-[24px]"
                />
                <Img
                  src="images/img_instagram.svg"
                  alt="InstagramIcon"
                  className="h-[24px]"
                />
                <Img
                  src="images/img_facebook.svg"
                  alt="FacebookIcon"
                  className="h-[24px]"
                />
                <Img
                  src="images/img_linkedin.svg"
                  alt="LinkedInIcon"
                  className="h-[24px]"
                />
              </div>
            </div>
            <div className="flex w-[60%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
              <div className="flex w- [34%] flex-col items-start gap-8 md:w-full">
                <Heading
                  size="texts"
                  as="p"
                  className="text-[16px] font-medium !text-gray-900_02"
                >
                  PLATFORM
                </Heading>
                <ul className="flex flex-col items-start gap-4">
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Browse mentors
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Book a Session
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Become a Mentor
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Mentorship for Teams
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Testimonials" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Testimonials
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[26%] flex-col items-start gap-8 self-center md:w-full">
                <Heading
                  size="texts"
                  as="p"
                  className="text-[16px] font-medium !text-gray-900_02"
                >
                  RESOURCES
                </Heading>
                <ul className="flex flex-col items-start gap-4">
                  <li>
                    <a href="Newsletter" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Newsletter
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Podcast" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Podcast
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Case studies
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Perks" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Perks
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Templates" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Templates
                      </Heading>
                    </a>
                  </li>

                  <li>
                    <a href="Spreadsheets" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Spreadsheets
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Career paths
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Alternatives" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Alternatives
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Blog" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Blog
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[28%] flex-col items-start gap-8 md:w-full">
                <Heading
                  size="texts"
                  as="p"
                  className="text-[16px] font-medium !text-gray-900_02"
                >
                  COMPANY
                </Heading>
                <ul className="flex flex-col items-start gap-4">
                  <li>
                    <a href="About" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        About
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Partner program
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Code of conduct
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Privacy policy
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-8">
                <Heading
                  size="texts"
                  as="p"
                  className="text-[16px] font-medium ! text-gray-900_02"
                >
                  SUPPORT
                </Heading>
                <ul className="flex flex-col items-start gap-4">
                  <li>
                    <a href="FAQ" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        FAQ
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Contact" target="_blank" rel="noreferrer">
                      <Heading
                        size="texts"
                        as="p"
                        className="text-[16px] font-medium"
                      >
                        Contact
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Heading size="texts" as="p" className="flex text-[16px] font-medium">
            <span>© 2023&nbsp;</span>
            <a href="#" className="inline underline">
              Sarparast
            </a>
            <span>. All Rights Reserved.</span>
          </Heading>
        </div>
      </div>
    </footer>
  );
}
