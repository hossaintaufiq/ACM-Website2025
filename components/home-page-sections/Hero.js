"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  BsChevronDown,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsYoutube,
} from "react-icons/bs";
import { CountUp } from "use-count-up";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
const route = useRouter()

  return (
    <div className="relative py-14 md:py-20">
      {/* Banner */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center md:items-start justify-center">
          {/* Welcome Text */}
          <div className="grid md:grid-cols-2 gap-2">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center md:text-start md:font-medium">
              <sapn className='glow-effect'>WELCOME TO NSU ACM</sapn> <span className="glow-effect">STUDENT CHAPTER</span>
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4 mt-12">
            <Button className="px-[2.9rem] md:px-16 md:h-12 md:font-bold"
            onClick={() => window.location.href = 'https://www.facebook.com/nsuacmsc'}
            >
              Join Now
            </Button>
            <Button
              variant="secondary"
              className="px-8 md:px-12 md:h-12 md:font-bold"
              onClick={() => route.push('/our-events')}
            >
              Event Page
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Counters */}
      <MaxWidthWrapper>
        <div className="mt-6 md:mt-20 lg:mt-32 grid sm:grid-cols-1 md:grid-cols-4 md:justify-end items-center">
          <div className="grid grid-cols-1 col-span-3 md:grid-cols-4 bg-[#215AD7] md:p-5 lg:p-10 rounded-lg">
            <div className="flex gap-10 md:gap-0 md:flex-col md:justify-center items-center border-b-2 md:border-r-2 md:border-b-0 p-4 md:px-2">
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-medium md:font-bold">
                <CountUp isCounting end={30} duration={2} easing={"linear"} />+
              </h1>
              <p className="text-3xl md:text-[18px] lg:text-2xl">workshops</p>
            </div>
            <div className="flex gap-10 md:gap-0 md:flex-col md:justify-center items-center border-b-2 md:border-r-2 md:border-b-0 p-4 md:px-2">
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-medium md:font-bold">
                <CountUp isCounting end={13} duration={2} easing={"linear"} />+
              </h1>
              <p className="text-3xl md:text-[18px] lg:text-2xl">events</p>
            </div>
            <div className="flex gap-10 md:gap-0 md:flex-col md:justify-center items-center border-b-2 md:border-r-2 md:border-b-0 p-4 md:px-2">
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-medium md:font-bold">
                <CountUp isCounting end={15} duration={2} easing={"linear"} />+
              </h1>
              <p className="text-3xl md:text-[18px] lg:text-2xl">seminars</p>
            </div>
            <div className="flex gap-14 md:gap-0 md:flex-col md:justify-center items-center p-4 md:px-2">
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-medium md:font-bold">
                0<CountUp isCounting end={3} duration={2} easing={"linear"} />
              </h1>
              <p className="text-3xl md:text-[18px] lg:text-2xl">publications</p>
            </div>
          </div>

          <div className="hidden md:flex md:flex-col md:gap-8 md:text-3xl lg:text-4xl items-end">
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/nsuacmsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://bd.linkedin.com/company/nsuacmsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/NSU-ACM-SC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@nsuacmstudentchapter4819"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>

            {/* <BsMedium /> */}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Down Arrow */}
      <a href="#about">
        <button className="flex items-center justify-center text-3xl font-bold w-full mt-6 md:mt-12">
          <BsChevronDown />
        </button>
      </a>
    </div>
  );
};
export default Hero;
