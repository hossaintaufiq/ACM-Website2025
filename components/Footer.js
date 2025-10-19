import React from "react";
import ACMLogo from "../app/assets/img/logo/ACM_Logo_22.png";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center text-[1.25rem]">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 py-12 md:py-18">
          {/* Left */}
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src={ACMLogo}
              width={100}
              height={100}
              className=""
              alt="ACM Logo"
            />
            <p className="text-gray-400 italic text-center text-sm md:text-md">
              The First Student Chapter Of The Association For Computing
              Machineries In Bangladesh.
            </p>
          </div>
          {/* Middle */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-0">
            <div className="flex md:justify-center">
              <div>
                <p className="text-xl md:text-3xl font-medium">Useful Links</p>
                <ul className="mt-6 text-sm md:text-md text-gray-400 list-disc px-6">
                  <li>
                    <a
                      href="https://www.acm.org/education"
                      className="hover:text-[#2F92D0]"
                    >
                      ACM Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dl.acm.org/"
                      className="hover:text-[#2F92D0]"
                    >
                      ACM Digital Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.acm.org/code-of-ethics"
                      className="hover:text-[#2F92D0]"
                    >
                      ACM Code of Ethics
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.northsouth.edu/"
                      className="hover:text-[#2F92D0]"
                    >
                      NSU Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://ece.northsouth.edu/"
                      className="hover:text-[#2F92D0]"
                    >
                      NSU ECE Department
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-end mt-6 md:mt-0">
              <div className="flex flex-col gap-6">
                <p className="flex items-center gap-2"><span><MdEmail /></span> acm.sc@northsouth.edu</p>
                <p className="text-gray-400 italic text-sm md:text-md">
                  South Academic Building(10th Floor), North South University,
                  Bashundhara R/A, Dhaka-1229, Bangladesh
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-8">
                  <BsFacebook  className="w-[30px] h-[30px]"/>
                  <BsLinkedin className="w-[30px] h-[30px]"/>
                  <BsGithub className="w-[30px] h-[30px]"/>
                  <BsYoutube className="w-[30px] h-[30px]"/>
                  <BsMedium className="w-[30px] h-[30px]"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botton */}
        <div className="text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center w-full gap-2 md:gap-0 text-gray-500 italic">
          <p>©Copyright NSU ACM SC. All Rights Reserved</p>
          <p>Developed by NSU ACM SC Web Team</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
