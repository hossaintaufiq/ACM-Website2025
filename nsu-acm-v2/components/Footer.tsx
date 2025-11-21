"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// Lazy load icons
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

const MediumIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const socialLinks = [
  { href: "https://www.facebook.com/nsuacmsc", icon: FacebookIcon, label: "Facebook", color: "hover:text-blue-400" },
  { href: "https://bd.linkedin.com/company/nsuacmsc", icon: LinkedInIcon, label: "LinkedIn", color: "hover:text-blue-500" },
  { href: "https://github.com/NSU-ACM-SC", icon: GitHubIcon, label: "GitHub", color: "hover:text-gray-300" },
  { href: "https://www.youtube.com/@nsuacmstudentchapter4819", icon: YouTubeIcon, label: "YouTube", color: "hover:text-red-500" },
  { href: "https://medium.com/nsuacmsc", icon: MediumIcon, label: "Medium", color: "hover:text-green-400" },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className="relative bg-gradient-to-b from-transparent via-[#020817]/50 to-[#020817] border-t border-white/10 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div
            className={`col-span-1 md:col-span-1 flex flex-col items-center md:items-start transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="/acm-logo.png"
                alt="ACM Logo"
                fill
                className="object-contain"
                loading="lazy"
                sizes="80px"
              />
            </div>
            <p className="text-white/60 italic text-sm text-center md:text-left">
              The First Student Chapter Of The Association For Computing Machineries In Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`col-span-1 transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/events", label: "Events" },
                { href: "/sponsors", label: "Sponsors" },
                { href: "/teams", label: "Teams" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div
            className={`col-span-1 transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "http://www.northsouth.edu/", label: "NSU Website", external: true },
                { href: "http://ece.northsouth.edu/", label: "NSU ECE Website", external: true },
                { href: "https://www.acm.org/", label: "ACM Official", external: true },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div
            className={`col-span-1 transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:acm.sc@northsouth.edu"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm group"
              >
                <EmailIcon />
                <span>acm.sc@northsouth.edu</span>
              </a>
              <p className="text-white/60 text-xs italic">
                South Academic Building(10th Floor), North South University, Bashundhara R/A, Dhaka-1229, Bangladesh
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/60 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 transition-all duration-1000 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p>© {new Date().getFullYear()} Copyright NSU ACM SC. All Rights Reserved</p>
          <p className="text-center md:text-right">
            Developed by{" "}
            <span className="text-white/80 font-semibold">NSU ACM SC Web Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

