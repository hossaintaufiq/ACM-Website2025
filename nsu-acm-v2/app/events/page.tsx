export default function EventsPage() {
  const events = [
    {
      title: "HackNSU",
      description: "Annual hackathon bringing together developers and innovators",
      date: "Coming Soon",
    },
    {
      title: "Technovation",
      description: "Technology innovation showcase and competition",
      date: "Coming Soon",
    },
    {
      title: "Hour of Code",
      description: "Introduction to programming for beginners",
      date: "Coming Soon",
    },
    {
      title: "Innovation Challenge",
      description: "Competition for innovative tech solutions",
      date: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Our Events
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors duration-200"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {event.title}
              </h2>
              <p className="text-slate-300 mb-4">{event.description}</p>
              <p className="text-blue-400 font-medium">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

