export default function SponsorsPage() {
  const sponsors = [
    {
      name: "Gold Sponsor",
      tier: "Gold",
      description: "Our premier partners supporting innovation",
    },
    {
      name: "Silver Sponsor",
      tier: "Silver",
      description: "Dedicated supporters of our community",
    },
    {
      name: "Bronze Sponsor",
      tier: "Bronze",
      description: "Valuable contributors to our mission",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Our Sponsors
        </h1>
        <div className="space-y-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {sponsor.name}
                </h2>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    sponsor.tier === "Gold"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : sponsor.tier === "Silver"
                      ? "bg-gray-400/20 text-gray-300"
                      : "bg-orange-600/20 text-orange-400"
                  }`}
                >
                  {sponsor.tier}
                </span>
              </div>
              <p className="text-slate-300">{sponsor.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Interested in becoming a sponsor?
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

