"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

const JoinNow = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="py-16 md:py-20 lg:py-24 relative">
        <div
          ref={cardRef}
          className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/20 p-8 md:p-12 lg:p-16"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Want to be a part of us?
              </h2>
              <p className="text-white/70 text-lg md:text-xl">
                Join our community and be part of something amazing
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
          <Button
                className="px-8 md:px-12 h-12 md:h-14 text-lg font-semibold bg-white text-blue-600 hover:bg-white/90 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50"
            onClick={() => window.location.href = 'https://www.facebook.com/nsuacmsc'}
          >
                Join Now
          </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
    </MaxWidthWrapper>
  );
};

export default JoinNow;
