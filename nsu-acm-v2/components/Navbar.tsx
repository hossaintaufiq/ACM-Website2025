"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navbarConfig } from "@/config/navbar.config";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Check if any child of a dropdown is active
  const hasActiveChild = (children?: { href: string; label: string }[]) => {
    if (!children) return false;
    return children.some((child) => isActive(child.href));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/acm-logo.png"
              alt="ACM Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-white font-semibold text-lg hidden sm:block">
              NSU ACM SC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navbarConfig.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-lg flex items-center gap-1 text-sm lg:text-base ${
                        hasActiveChild(item.children)
                          ? "text-white bg-slate-800"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-slate-700/50 rounded-lg shadow-lg py-2"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm ${
                              isActive(child.href)
                                ? "text-white bg-slate-700"
                                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm lg:text-base ${
                      isActive(item.href)
                        ? "text-white bg-slate-800"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-2">
              {navbarConfig.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm ${
                          hasActiveChild(item.children)
                            ? "text-white bg-slate-800"
                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={`block px-4 py-2 rounded-lg text-sm ${
                                isActive(child.href)
                                  ? "text-white bg-slate-800"
                                  : "text-slate-300 hover:text-white hover:bg-slate-800"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm ${
                        isActive(item.href)
                          ? "text-white bg-slate-800"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}
