import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

// ------image------
import Image from "next/image";
import ACMLogo from "../app/assets/img/logo/ACM_Logo_22.png";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

const Navbar = () => {
  const [isMenuCliked, setIsMenuCliked] = useState(false);
  const pathName = usePathname();

  return (
    <MaxWidthWrapper>
      <div className="py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link
              id="top"
              className={`text-center flex justify-between items-center`}
              href="/"
            >
              <Image
                src={ACMLogo}
                className="hover:scale-110 duration-300 h-[50px] w-[52px] lg:h-[70px] lg:w-[80px]"
                alt="ACM Logo"
              />
            </Link>
          </div>

          <ul className="hidden md:flex gap-5">
            <li>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  className: `md:px-1 lg:text-xl ${
                    pathName === "/" ? "bg-white text-black" : ""
                  }`,
                })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={buttonVariants({
                  variant: "ghost",
                  className: `md:px-1 lg:text-xl ${
                    pathName === "/aboutus" ? "bg-white text-black" : ""
                  }`,
                })}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/our-events"
                className={buttonVariants({
                  variant: "ghost",
                  className: `md:px-1 lg:text-xl ${
                    pathName === "/our-events" ? "bg-white text-black" : ""
                  }`,
                })}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/sponsor"
                className={buttonVariants({
                  variant: "ghost",
                  className: `md:px-1 lg:text-xl ${
                    pathName === "/sponsor" ? "bg-white text-black" : ""
                  }`,
                })}
              >
                Sponsors
              </Link>
            </li>

            <li>
              <Link
                href="/forthcoming"
                className={buttonVariants({
                  variant: "ghost",
                  className: `md:px-1 lg:text-xl ${
                    pathName === "/forthcoming" ? "bg-white text-black" : ""
                  }`,
                })}
              >
                Forthcoming
              </Link>
            </li>

            <li>
              <Link
                href="/verify"
                className={buttonVariants({
                  variant: "ghost",
                  className: `md:px-1 lg:text-xl ${
                    pathName === "/verify" ? "bg-white text-black" : ""
                  }`,
                })}
              >
                Verify Certificate
              </Link>
            </li>

            {/* <li> */}
            <DropdownMenuDemo />
            {/* </li> */}
          </ul>

          <div className="md:hidden">
            <div className="text-3xl">
              {isMenuCliked ? (
                <MdClose onClick={() => setIsMenuCliked(false)} />
              ) : (
                <FiMenu onClick={() => setIsMenuCliked(true)} />
              )}
            </div>
          </div>
        </div>

        <div className={`${isMenuCliked ? "block" : "hidden"} mt-3`}>
          <ul>
            <Link
              href="/"
              className="hover:text-[#2F92D0]"
              onClick={() => setIsMenuCliked(false)}
            >
              <li className="border-b-2 border-b-white/10 p-1">Home</li>
            </Link>
            <Link
              href="/aboutus"
              className="hover:text-[#2F92D0]"
              onClick={() => setIsMenuCliked(false)}
            >
              <li className="border-b-2 border-b-white/10 p-1">About</li>
            </Link>
            <Link
              href="/our-events"
              className="hover:text-[#2F92D0]"
              onClick={() => setIsMenuCliked(false)}
            >
              <li className="border-b-2 border-b-white/10 p-1">Events</li>
            </Link>
            <li>
              <DropdownMenuDemo />
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
