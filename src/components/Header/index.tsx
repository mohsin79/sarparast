import { Button, Heading, Img } from "./..";
import React from "react";
interface Props {
  className?: string;
}
export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center top-6 right-0 left-0 gap-5 md:px-5 absolute container-xs md:relative`}
    >
      <div className="flex w-[54%] items-center justify-between gap-5 md:w-full sm:flex-col">
        <Img
          src="images/header_logo.png"
          alt="Headerlogo"
          className="h-[28px] w-[186px] object-contain"
        />
        <ul className="flex flex-wrap gap-8 self-end">
          <li>
            <a href="#">
              <Heading
                as="p"
                className="text-[16px] font-medium !text-gray-900_02"
              >
                Find a mentor
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading
                as="p"
                className="text-[16px] font-medium !text-gray-900_02"
              >
                For businesses
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading
                as="p"
                className="text-[16px] font-medium !text-gray-900_02"
              >
                Book a session
              </Heading>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex w-[28%] items-center justify-between gap-5 md:w-full">
        <Heading
          as="p"
          className="mb-2 ml-6 self-end text-[16px] font-medium !text-pink-600 underline"
        >
          Become a mentor
        </Heading>
        <Button
          color="pink_50"
          shape="round"
          className="min-w-[136px] rounded-lg px-6"
        >
          Get started
        </Button>
      </div>
    </header>
  );
}
