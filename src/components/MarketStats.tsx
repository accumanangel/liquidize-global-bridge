
const MarketStats = () => {
  const stats = [
    {
      number: "40M+",
      label: "African Diaspora Population",
      sublabel: "Across US, UK, Canada & EU",
      color: "from-purple-400 to-purple-600"
    },
    {
      number: "$128B",
      label: "Annual Remittances to Africa", 
      sublabel: "Growing 5.2% yearly",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      number: "$850B",
      label: "Estimated Diaspora Wealth",
      sublabel: "Locked in home country assets",
      color: "from-purple-400 to-cyan-400"
    },
    {
      number: "73%",
      label: "Property Ownership Rate",
      sublabel: "Among African diaspora",
      color: "from-cyan-400 to-purple-400"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Massive
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Untapped Market
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The African diaspora represents one of the world's largest underserved financial markets
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
              <div className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2 text-white">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Market opportunity breakdown */}
        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Market Opportunity Breakdown</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500/40 rounded-lg" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-purple-400">Primary Market</h4>
              <p className="text-gray-300 text-sm">
                High-income diaspora professionals in finance, tech, and healthcare seeking capital access
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-cyan-500/40 rounded-lg" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-cyan-400">Secondary Market</h4>
              <p className="text-gray-300 text-sm">
                Mid-income immigrants with substantial home country assets seeking business loans
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-lg" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-purple-300">Future Expansion</h4>
              <p className="text-gray-300 text-sm">
                Global diaspora communities from Latin America, Asia, and other emerging markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
