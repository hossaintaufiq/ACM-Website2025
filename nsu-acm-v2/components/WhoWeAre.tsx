"use client";

export default function WhoWeAre() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              WHO WE ARE
            </h2>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                We are the <span className="text-blue-400 font-semibold">first student chapter</span> of the
                Association for Computing Machinery in Bangladesh.
              </p>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                NSU ACM Student Chapter is one of <span className="text-purple-400 font-semibold">680 chapters worldwide</span> and
                contributes to the broad scope of ACM by advancing computing as a science and profession.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Innovation", "Collaboration", "Excellence", "Community"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Simple SVG Graphics - Hidden on smaller devices */}
          <div className="hidden lg:flex relative h-[400px] lg:h-[500px] items-center justify-center">
            <svg
              viewBox="0 0 600 500"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="300" cy="250" r="200" fill="url(#gradient1)" opacity="0.15" />

              {/* Main Computer/Device SVG */}
              <g transform="translate(300, 250)">
                {/* Computer Monitor */}
                <rect
                  x="-120"
                  y="-80"
                  width="240"
                  height="160"
                  rx="8"
                  fill="url(#gradient2)"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                />

                {/* Screen Content */}
                <rect
                  x="-110"
                  y="-70"
                  width="220"
                  height="140"
                  rx="4"
                  fill="rgba(15, 23, 42, 0.8)"
                />

                {/* Code Lines on Screen */}
                <g fill="rgba(34, 197, 94, 0.6)" fontSize="12" fontFamily="monospace">
                  <rect x="-100" y="-50" width="80" height="3" rx="1" />
                  <rect x="-100" y="-40" width="120" height="3" rx="1" />
                  <rect x="-100" y="-30" width="100" height="3" rx="1" />
                  <rect x="-100" y="-20" width="90" height="3" rx="1" />
                  <text x="-100" y="0" fontSize="10">{"{"}</text>
                  <text x="-90" y="15" fontSize="10">code</text>
                  <text x="-100" y="30" fontSize="10">{"}"}</text>
                </g>

                {/* Monitor Stand */}
                <rect x="-40" y="80" width="80" height="8" rx="2" fill="rgba(71, 85, 105, 0.8)" />
                <rect x="-60" y="88" width="120" height="6" rx="2" fill="rgba(51, 65, 85, 0.8)" />

                {/* Simple Floating Elements */}
                <g>
                  {/* Code Brackets */}
                  <text
                    x="-180"
                    y="-120"
                    fontSize="40"
                    fill="rgba(59, 130, 246, 0.3)"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {"{"}
                  </text>
                  <text
                    x="140"
                    y="120"
                    fontSize="40"
                    fill="rgba(147, 51, 234, 0.3)"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {"}"}
                  </text>
                </g>

                {/* Simple Tech Icons */}
                <g>
                  {/* CPU Icon */}
                  <rect x="150" y="-100" width="40" height="40" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                  <circle cx="170" cy="-80" r="8" fill="rgba(59, 130, 246, 0.5)" />
                  <rect x="165" y="-70" width="10" height="15" rx="1" fill="rgba(59, 130, 246, 0.5)" />
                </g>

                <g>
                  {/* Network Icon */}
                  <circle cx="-180" cy="100" r="20" fill="none" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" />
                  <circle cx="-180" cy="100" r="12" fill="rgba(147, 51, 234, 0.15)" />
                  <line x1="-200" y1="100" x2="-160" y2="100" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" />
                  <line x1="-180" y1="80" x2="-180" y2="120" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" />
                </g>
              </g>

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
