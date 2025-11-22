"use client";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ACMLogo from "../app/assets/img/logo/ACM_Logo_22.png";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const pathName = usePathname();

  // Memoize navigation items to prevent re-computation on every render
  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/aboutus", label: "About" },
      { href: "/our-events", label: "Events" },
      { href: "/sponsor", label: "Sponsors" },
      { href: "/forthcoming", label: "Forthcoming" },
      { href: "/verify", label: "Verify Certificate" },
    ],
    []
  );

  // Memoize active link class computation
  const getLinkClassName = useCallback(
    (href) => {
      const baseClass = buttonVariants({
        variant: "ghost",
        className: "md:px-1 lg:text-xl transition-all duration-200 hover:scale-105",
      });
      const isActive = pathName === href;
      return `${baseClass} ${
        isActive
          ? "bg-white/10 text-white font-semibold backdrop-blur-sm"
          : "text-white/80 hover:text-white"
      }`;
    },
    [pathName]
  );

  // Optimized menu toggle handler
  const toggleMenu = useCallback(() => {
    setIsMenuClicked((prev) => !prev);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = useCallback(() => {
    setIsMenuClicked(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#020817]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
    <MaxWidthWrapper>
      <div className="py-4">
        <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Link
              id="top"
              href="/"
                prefetch={true}
                className="text-center flex justify-between items-center group"
            >
              <Image
                src={ACMLogo}
                  width={80}
                  height={70}
                  className="h-[50px] w-[52px] lg:h-[70px] lg:w-[80px] transition-transform duration-300 group-hover:scale-110"
                alt="ACM Logo"
                  priority
              />
            </Link>
          </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-2 lg:gap-5 items-center">
              {navItems.map((item) => (
                <li key={item.href}>
              <Link
                    href={item.href}
                    prefetch={true}
                    className={getLinkClassName(item.href)}
              >
                    {item.label}
              </Link>
            </li>
              ))}
            <li>
                <DropdownMenuDemo />
            </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-3xl text-white transition-transform duration-200 hover:scale-110 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuClicked}
              >
                {isMenuClicked ? (
                  <MdClose className="animate-in fade-in duration-200" />
              ) : (
                  <FiMenu className="animate-in fade-in duration-200" />
              )}
              </button>
          </div>
        </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuClicked
                ? "max-h-96 opacity-100 mt-3"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
            <Link
                    href={item.href}
                    prefetch={true}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 hover:text-white border-b border-white/5 ${
                      pathName === item.href
                        ? "bg-white/10 text-white font-semibold"
                        : "text-white/80"
                    }`}
                  >
                    {item.label}
            </Link>
                </li>
              ))}
              <li className="px-4 py-3">
              <DropdownMenuDemo />
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
