"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import PrizePool from "./PrizePool";

const timelineData = [
  {
    title: "REGISTRATION",
    date: "Starts 6th FEB, 2025\nEnds 12th FEB, 2025",
    image: "/Registration.png",
  },
  {
    title: "PHASE 01 RESULT",
    date: "16TH FEB, 2025",
    image: "/circle2.png",
  },
  {
    title: "FINAL PHASE REGISTRATION",
    date: "Starts 16TH FEB, 2025\nEnds 18TH FEB, 2025",
    image: "/circle3.png",
  },
  {
    title: "FINAL PHASE",
    date: "20TH FEB, 2025",
    image: "/circle4.png",
  },
  {
    title: "CLOSING EVENT",
    date: "20TH FEB, 2025",
    image: "/end.png",
  },
];

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks which timeline point is active
  const [isMobile, setIsMobile] = useState(false); // Tracks if the device is mobile

  // Effect to handle window resize and detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize); // Add event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center py-20 relative">
      {/* Timeline Container */}
      {isMobile ? (
        // Mobile Layout
        <div className="flex flex-col">
          {timelineData.map((event, index) => (
            <div key={index} className="flex flex-col items-center mb-3">
              {/* Event Details Box */}
              <div className="w-56 border border-red-800 shadow-lg bg-black text-white text-center">
                <div className="bg-red-800 py-2 font-bold">{event.title}</div>
                <div className="py-2 text-sm whitespace-pre-line">
                  {event.date}
                </div>
              </div>

              {/* Arrow Image (except after the fifth box) */}
              {index < timelineData.length - 1 && (
                <Image
                  src="/Arrow.png"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="mt-0" // No gap between box and arrow
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        // Desktop Layout
        <div className="relative flex items-center justify-between w-full px-[8%]">
          {/* Timeline Line */}
          <div
            className="absolute h-[2px] w-[84%] left-[8%] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg"
            style={{
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.9)",
            }}
          ></div>

          {/* Start Circle */}
          <div className="w-8 h-8 bg-gray-400 rounded-full relative z-10"></div>

          {/* Timeline Points */}
          {timelineData.map((event, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[14%]"
            >
              {/* Timeline Circle */}
              <div
                className={`relative w-12 h-12 bg-red-700 rounded-full transition-all duration-200 ease-in-out cursor-pointer transform ${
                  activeIndex === index ? "scale-125" : "scale-100"
                }`}
                onMouseEnter={() => setActiveIndex(index)} // Show box on hover
                onMouseLeave={() => setActiveIndex(null)} // Hide box on hover out
              >
                {/* Add image to the circle */}
                <Image
                  src={event.image}
                  alt={event.title}
                  width={32}
                  height={32}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Event Details Box */}
              {activeIndex === index && (
                <div
                  className={`absolute ${
                    index === 0
                      ? "top-[-120px]"
                      : index === 2
                      ? "top-[-140px]"
                      : index % 2 === 0
                      ? "top-[-100px]"
                      : "bottom-[-100px]"
                  } left-1/2 transform -translate-x-1/2 w-56 border border-red-700 shadow-lg z-20`}
                  style={{
                    backgroundColor: "rgb(0, 0, 0)",
                    boxShadow: "0 4px 6px rgba(185, 28, 28, 0.5)",
                  }}
                >
                  <div
                    className="py-2 font-bold text-center"
                    style={{ backgroundColor: "rgb(185, 28, 28)" }}
                  >
                    {event.title}
                  </div>
                  <div className="py-2 text-sm whitespace-pre-line text-center">
                    {event.date}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* End Circle */}
          <div className="w-8 h-8 bg-gray-400 rounded-full relative z-10"></div>
        </div>
      )}
    </div>
  );
}

function HackNsu() {
  return (
    <div
      // background image
      className="bg-fixed bg-cover bg-center min-h-screen py-4 px-4 sm:px-8"
      style={{ backgroundImage: "url('/hack-nsu-banner.jpg')" }}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center w-full h-auto sm:h-[80px]">
        {/* Logo Container */}
        <div className="flex items-center justify-between sm:w-[20%] h-full px-2">
          <Image
            src="/NSU&ACM_logo.png"
            width={200}
            height={100}
            className="object-contain"
            alt="ACM Logo"
          />
        </div>

        {/* Title Section */}
        <div className="w-full sm:w-[60%] text-center">
          <h1 className="text-white text-4xl font-sans font-semibold truncate">
            NSU ACM STUDENT CHAPTER
          </h1>
        </div>

        {/* Department Section */}
        {/* <div className="w-full sm:w-[20%] text-center">
          <h6 className="text-white text-lg font-bold leading-tight">
            Department of Electrical and <br /> Computer Engineering
          </h6>
        </div> */}
      </div>

      <div className="pb-5 text-center">
        <p className="text-xl ">PRESENTS </p>
      </div>
      <div className="flex justify-center py-4">
        <Image height={200} width={200} src="/hack-nsu-Logo.png" alt="" />
      </div>
      <div className="text-center py-4">
        <p className="text-4xl font-medium glow-effect">#HackToTheFuture</p>
      </div>

      {/* Registration & Rule Book Buttons */}
      <div className="text-center py-6 mt-5 buttons">
        <button
          type="button"
          className="button"
          onClick={() => window.open("https://drive.google.com/file/d/19T1k7zuZDRI_267cHgdAiIecU8L48d_0/view", "_blank")}
        >
          Rule Book
        </button>
        <button
          type="button"
          className="button"
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSc0y32Cu_tktiBnW28UTQ-GC_wM7ABPgyBz8UNbcrr1DC7tTg/viewform", "_blank")}
        >
          Register
        </button>
      </div>

      {/* Sponsor Section */}

      <div className="w-full flex flex-col sm:flex-row items-center justify-center px-4 gap-4 py-6">
        {/* Left Section */}
        {/* <div className="w-full sm:w-1/3 sm:flex-row items-center text-center sm:text-left">
          <h5 className="text-white font-bold sm:pb-3">Powered By</h5>*/}

        {/* <div className="w-full flex flex-col sm:flex-row items-center justify-center px-4 gap-4 py-6"> */}

        {/* -----------------------------Hoster by Section------------------------ */}
        {/* <div className="w-full sm:w-1/2 sm:flex-row items-center text-center sm:text-left">
          <h5 className="text-white font-bold sm:pb-3">Hosted By</h5>

          <div className="flex items-center sm:justify-start justify-center">

          <div className="flex items-center sm:justify-start justify-center"> */}

        {/* NSU Logo */}
        {/* <Image
              src="/img/nsu logo.png"
              height={75}
              width={75}
              className="object-contain mx-2"
              alt="NSU Logo"
            /> */}

        {/* Vertical Line */}
        {/* <div className="w-[4px] h-[2px] py-10 sm:h-full border bg-white mx-2"></div> */}

        {/* Department Text */}
        {/* <h6 className="text-white text-lg">
              Department of Electrical and <br /> Computer Engineering
            </h6>
          </div>

        </div>
        </div>
        
        {/* Right Section */}
        {/*<div className="w-full sm:w-1/3 flex flex-col items-center sm:items-end text-center sm:text-right pt-3">
          <h5 className="text-white font-bold pb-3">Hosted By</h5>*/}
      </div>

      {/* -----------------------Powered by Section------------------- */}
      {/* <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end text-center sm:text-right pt-3">
          <h5 className="text-white font-bold pb-3 sm:me-2">Powered By</h5>
          <Image
            src="/img/ACM_Logo_22.png"
            height={120}
            width={120}
            className="object-contain"
            alt="ACM Logo"
          />
        </div> */}
      {/* </div> */}

      {/* Button section: Rule book & Register */}

      {/* About section from FB event */}
      <MaxWidthWrapper className="my-10">
        <div className="w-full mx-auto px-4 md:px-0">
          {/* titel ber */}
          <div className="flex tektur-font italic w-full max-w-[300px] rounded border-red-900 border-4">
            <span className="bg-red-900 w-1/2 md:w-[150px] pl-4 md:pl-7 py-2 font-black uppercase text-[16px] md:text-[18px]">
              About
            </span>
            <span className="bg-gray-900 w-1/2 md:w-[200px] pl-4 md:pl-8 py-2 font-black uppercase text-[16px] md:text-[18px]">
              HackNSU
            </span>
          </div>

          <div className="mt-6 text-base md:text-lg leading-relaxed">
            <p>
              HackNSU is the flagship hackathon organized by the NSU ACM Student
              Chapter, designed to bring together innovators, problem solvers,
              and tech enthusiasts from across Bangladesh. It serves as a
              dynamic platform where participants compete, collaborate, and
              develop cutting-edge solutions to real-world challenges.
            </p>

            <p className="mt-4">
              Since its inception in 2019, HackNSU has evolved into a premier
              national tech competition, offering intense coding challenges,
              industry mentorship, and exciting prizes. Now in its 5th season,
              HackNSU continues to inspire the next generation of developers,
              designers, and entrepreneurs to push the boundaries of technology.
            </p>
          </div>
          <p className="mt-6 font-semibold text-base md:text-lg">
            Are you ready to{" "}
            <span className="text-red-500">#HackToTheFuture?</span>
          </p>
        </div>
      </MaxWidthWrapper>

      {/* Event Timeline section */}
      <Timeline />

      {/* Price pool section */}

      {/* Prize Section */}
      <div className="flex flex-col items-center gap-6 py-6">
        {/* Prize Money */}
        <PrizePool />

        {/* Event Details */}
        <div className="bg-red-500 bg-opacity-0  lg:flex sm:flex-warp  text-white rounded-lg px-6 py-3 text-center border-4 border-red-900 w-auto text-lg">
          <h2>DATE: 27 FEBRUARY | </h2>
          <h2>TIME: 8:00AM-4:00PM | </h2>
          <h2>VENUE: PLAZA AREA, NSU </h2>
        </div>

        <section>
          <div className="section-ttl">
            <h4 className="linear-wipe align-items-center px-6">Rule Book</h4>
          </div>
          <div className="container mt-7">
            <div className="row">
              <div className="d-flex flex-column align-items-center">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <span className="text-2xl mb-3">
                          Scope-1: Innovative Technological Solutions for
                          Advancing Special Needs Education
                        </span>{" "}
                        <br />
                        HackNSU aims to harness cutting-edge technologies to
                        enhance accessibility, engagement, and personalized
                        learning for students with special needs. This includes
                        adaptive learning platforms and communication tools
                        tailored to diverse disabilities. Challenges include
                        addressing varied learning requirements and ensuring
                        educators have the necessary resources and expertise.
                        Solutions must focus on customizability, inclusivity,
                        and equipping teachers to effectively integrate
                        technology into special education.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <span className="text-2xl mb-3">
                          Scope-2: Digital Literacy for All: Empowering Rural
                          Bangladesh
                        </span>{" "}
                        <br />
                        Many rural communities in Bangladesh lack access to
                        digital education, leaving them behind in an
                        increasingly digital world. This affects their ability
                        to access online services, e-commerce, and even basic
                        communication. Develop a mobile-based digital literacy
                        platform that provides interactive tutorials, content in
                        local languages, and step-by-step guidance on essential
                        digital skills like online banking, job applications,
                        and e-commerce. The platform could target both youth and
                        adults, helping them harness technology for personal and
                        professional growth. Participants could also integrate
                        voice-activated navigation for illiterate users, making
                        digital tools more accessible.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <span className="text-2xl mb-3">
                          Scope-3: Tech-Enabled Public Health Awareness and
                          Monitoring
                        </span>{" "}
                        <br />
                        Develop a public health monitoring platform that tracks
                        disease outbreaks in real-time and provides updates to
                        citizens via SMS, mobile apps, or social media. Using
                        crowdsourced data and input from health authorities, the
                        platform can notify citizens of potential risks in their
                        area and offer guidelines on prevention and treatment.
                        Public health crises, such as dengue outbreaks or the
                        spread of communicable diseases, are common in
                        Bangladesh. Often, the lack of timely information
                        exacerbates these crises. The system could also provide
                        early-warning signals to health authorities, enabling
                        faster, tech- enabled responses to public health issues.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <span className="text-2xl mb-3">
                          Scope-4: Revolutionizing Governance and Social Policy
                          Through Technological Innovation
                        </span>{" "}
                        <br />
                        HackNSU seeks to drive innovation in governance by
                        developing tools that enhance transparency, data-driven
                        policymaking, citizen engagement, and efficient resource
                        management. Current systems often suffer from
                        inefficiencies and a lack of inclusivity. Key
                        technological solutions include AI for policy analysis,
                        blockchain for secure governance, and participatory
                        platforms for public service delivery. Success depends
                        on designing inclusive technologies and training
                        policymakers to adopt and manage these tools
                        effectively.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <span className="text-2xl mb-3">
                          Scope-5: Technological Advancements for Sustainable
                          Growth in Bangladesh’s RMG Sector
                        </span>{" "}
                        <br />
                        HackNSU aims to revolutionize Bangladesh’s Ready-Made
                        Garments (RMG) sector by promoting technological
                        solutions for supply chain optimization, automation, and
                        sustainable practices. Key areas include enhancing
                        efficiency, diversifying products, and focusing on
                        sustainability to improve worker welfare and market
                        reach. Innovations in automation, ethical production,
                        and high-value fashion products will help maintain the
                        sector’s global competitiveness and long-term growth.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <span className="text-2xl mb-3">
                          Scope-6: Smart Solutions for Women's Digital Security
                        </span>{" "}
                        <br />
                        Women's safety in public and online spaces remains a
                        critical issue in Bangladesh. Despite existing helplines
                        and law enforcement, many women feel unsafe due to the
                        lack of immediate support and resources. Create a mobile
                        safety app that allows women to alert trusted contacts
                        or authorities in real time if they are in danger. The
                        app could include features like location tracking, panic
                        buttons, and quick access to legal resources.
                        Additionally, it could educate users on their rights and
                        provide resources for victims of harassment or violence.
                        Providing women with tech-driven safety tools can foster
                        a safer and more supportive environment.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HackNsu;
