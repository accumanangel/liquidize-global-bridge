
const Team = () => {
  const founders = [
    {
      name: "Alex Thompson",
      role: "CEO & Co-Founder",
      background: "Former Goldman Sachs VP, Harvard MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "10+ years in traditional finance, specializing in emerging markets and fintech innovation."
    },
    {
      name: "Priya Patel", 
      role: "CTO & Co-Founder",
      background: "Ex-Stripe Engineering Lead, MIT CS",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
      bio: "Led blockchain infrastructure teams at top fintech companies, expert in DeFi protocols."
    },
    {
      name: "David Chen",
      role: "CPO & Co-Founder", 
      background: "Former Coinbase Product Manager, Stanford MBA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist with deep crypto expertise and passion for financial inclusion."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Founding Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class expertise in finance, technology, and emerging markets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              {/* Profile Image */}
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {founder.name}
                </h3>
                <div className="text-purple-400 font-semibold mb-2">
                  {founder.role}
                </div>
                <div className="text-sm text-cyan-400 mb-4">
                  {founder.background}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Team credentials */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Backed by Experience</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-sm text-gray-300">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">$50B+</div>
              <div className="text-sm text-gray-300">Assets Managed Previously</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-sm text-gray-300">Successful Exits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-sm text-gray-300">Patents Filed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
