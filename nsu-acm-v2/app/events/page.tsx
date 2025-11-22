"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function EventsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const events = [
    {
      name: "HackNSU",
      description: "Annual hackathon bringing together developers and innovators from across the region. A 24-48 hour coding marathon where participants build innovative solutions to real-world problems.",
      detailedDescription: "HackNSU is our flagship annual hackathon event that brings together the brightest minds in technology. Over 24-48 hours, participants work in teams to build innovative solutions addressing real-world challenges. The event features workshops, mentorship sessions, and networking opportunities with industry professionals. Winners receive exciting prizes and recognition, with opportunities for further development and potential startup support.",
      icon: "",
      color: "from-blue-500 to-cyan-500",
      images: [
        "/join-us-gallery/hackNSU1.jpg",
        "/join-us-gallery/hackNSU3.jpg",
      ],
    },
    {
      name: "Technovation",
      description: "Technology innovation showcase and competition where students present cutting-edge projects and compete for recognition. A platform for showcasing technical excellence and creativity.",
      detailedDescription: "Technovation is a comprehensive technology innovation showcase where students present their cutting-edge projects and compete for recognition. This event serves as a platform for showcasing technical excellence, creativity, and innovation. Participants get the opportunity to demonstrate their skills, receive feedback from industry experts, and network with peers and professionals. The event includes multiple categories covering various aspects of technology and innovation.",
      icon: "",
      color: "from-purple-500 to-pink-500",
      images: [
        "/join-us-gallery/innovationChallenge1.jpg",
        "/join-us-gallery/innovationChallenge2.jpg",
      ],
    },
    {
      name: "Hour of Code",
      description: "Educational coding workshops designed for all skill levels. An initiative to introduce programming concepts to beginners and help them take their first steps in the world of coding.",
      detailedDescription: "Hour of Code is an educational initiative designed to introduce programming concepts to beginners and help them take their first steps in the world of coding. These workshops are structured for all skill levels, from complete beginners to those looking to expand their knowledge. The sessions cover fundamental programming concepts, hands-on coding exercises, and provide a supportive learning environment. Participants work on real projects and receive guidance from experienced mentors.",
      icon: "",
      color: "from-green-500 to-emerald-500",
      images: [
        "/join-us-gallery/hoc0.jpg",
        "/join-us-gallery/hoc1.jpg",
        "/join-us-gallery/hoc2.jpg",
      ],
    },
    {
      name: "Programming Contest",
      description: "Competitive programming challenges and competitions that test algorithmic thinking and problem-solving skills. Perfect for students who love solving complex coding problems.",
      detailedDescription: "Our Programming Contest is a competitive event designed to test algorithmic thinking and problem-solving skills. Perfect for students who love solving complex coding problems, the contest features challenging problems that require creative thinking and efficient solutions. Participants compete individually or in teams, solving problems within time constraints. The event helps improve coding skills, logical thinking, and prepares participants for competitive programming platforms and technical interviews.",
      icon: "",
      color: "from-orange-500 to-red-500",
      images: [
        "/join-us-gallery/result.jpg",
      ],
    },
    {
      name: "Innovation Challenge",
      description: "Platform for creative tech solutions and innovative ideas. Students pitch their innovative projects and compete for prizes while solving real-world challenges.",
      detailedDescription: "The Innovation Challenge provides a platform for creative tech solutions and innovative ideas. Students pitch their innovative projects and compete for prizes while addressing real-world challenges. The event encourages entrepreneurship and innovation, with participants presenting their ideas to a panel of judges including industry experts and academic professionals. Winners receive mentorship opportunities, prizes, and potential support for further development of their projects.",
      icon: "",
      color: "from-indigo-500 to-purple-500",
      images: [
        "/join-us-gallery/innovationChallenge3.jpg",
        "/join-us-gallery/innovationChallenge4.jpg",
      ],
    },
  ];

  const galleryImages = [
    "/join-us-gallery/4.jpg",
    "/join-us-gallery/hackNSU1.jpg",
    "/join-us-gallery/hackNSU3.jpg",
    "/join-us-gallery/hoc0.jpg",
    "/join-us-gallery/hoc1.jpg",
    "/join-us-gallery/hoc2.jpg",
    "/join-us-gallery/innovationChallenge1.jpg",
    "/join-us-gallery/innovationChallenge2.jpg",
    "/join-us-gallery/innovationChallenge3.jpg",
    "/join-us-gallery/innovationChallenge4.jpg",
    "/join-us-gallery/result.jpg",
  ];

  const gallerySettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-out`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative group">
          {/* Main Card */}
          <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br ${event.color} p-[2px]`}>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
                {/* Left Side - Text Content */}
                <div className="order-2 md:order-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5">
                    {event.icon && (
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {event.icon}
                      </div>
                    )}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent break-words leading-tight">
                      {event.name}
                    </h2>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    {event.description}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <button
                      onClick={() => setSelectedEvent(index)}
                      className={`px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r ${event.color} text-white font-semibold text-xs sm:text-sm md:text-base transform hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Side - Images */}
                <div className="order-1 md:order-2 w-full">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {event.images.slice(0, 2).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group/image"
                      >
                        <Image
                          src={img}
                          alt={`${event.name} ${idx + 1}`}
                          fill
                          className="object-cover transform group-hover/image:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-0 group-hover/image:opacity-30 transition-opacity duration-500`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <div className={`hidden sm:block absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${event.color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
              <div className={`hidden sm:block absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tr ${event.color} opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-2 sm:mb-3 md:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Our Events
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              OUR FLAGSHIP EVENTS
            </span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Join us for exciting competitions, workshops, and tech gatherings that bring together the brightest minds in technology
          </p>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4 md:mt-6 rounded-full"></div>
        </div>

        {/* Events List */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                UPCOMING EVENTS
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4">
              Stay tuned for our upcoming events and workshops
            </p>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4 md:mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Upcoming Event Card 1 */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs sm:text-sm font-semibold">Coming Soon</p>
                    <p className="text-slate-400 text-xs">Spring 2026</p>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Tech Innovation Summit
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                  Join us for an exciting tech innovation summit featuring industry leaders, workshops, and networking opportunities.
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Upcoming Event Card 2 */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-400 text-xs sm:text-sm font-semibold">Coming Soon</p>
                    <p className="text-slate-400 text-xs">Spring 2026</p>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Coding Bootcamp Series
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                  Intensive coding bootcamp sessions covering modern web development, mobile apps, and cloud technologies.
                </p>
                <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Upcoming Event Card 3 */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6 sm:p-8 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-orange-400 text-xs sm:text-sm font-semibold">Coming Soon</p>
                    <p className="text-slate-400 text-xs">Spring 2026</p>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  AI & Machine Learning Workshop
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                  Explore the world of AI and ML with hands-on workshops, expert talks, and practical projects.
                </p>
                <div className="flex items-center gap-2 text-orange-400 text-xs sm:text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                EVENT GALLERY
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4">
              Capturing moments from our amazing events
            </p>
          </div>

          {isMounted && (
            <div className="gallery-slider px-1 sm:px-2 md:px-3">
              <Slider {...gallerySettings}>
                {galleryImages.map((img, index) => (
                  <div key={index} className="px-1 sm:px-2 md:px-3">
                    <div className="relative h-48 sm:h-64 md:h-80 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group">
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className={`relative max-w-4xl w-full my-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-white/10 shadow-2xl ${events[selectedEvent].color.replace('from-', 'border-').replace('to-', '/50')}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Event Header */}
              <div className="mb-4 sm:mb-6 md:mb-8 pr-8 sm:pr-12">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${events[selectedEvent].color} bg-clip-text text-transparent leading-tight`}>
                  {events[selectedEvent].name}
                </h2>
                <div className={`h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r ${events[selectedEvent].color} rounded-full`}></div>
              </div>

              {/* Detailed Description */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  {events[selectedEvent].detailedDescription}
                </p>
              </div>

              {/* Event Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {events[selectedEvent].images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={img}
                      alt={`${events[selectedEvent].name} ${idx + 1}`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${events[selectedEvent].color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
