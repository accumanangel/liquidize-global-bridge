
const MarketStats = () => {
  const stats = [
    {
      number: "5M+",
      label: "African Diaspora in UK",
      sublabel: "Primary target market",
      color: "from-purple-400 to-purple-600"
    },
    {
      number: "3M+",
      label: "African Diaspora in EU", 
      sublabel: "Expanding European presence",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      number: "2M+",
      label: "African Diaspora in USA",
      sublabel: "Growing North American market",
      color: "from-purple-400 to-cyan-400"
    },
    {
      number: "$850B",
      label: "Estimated Asset Value",
      sublabel: "Locked in home countries",
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
              Market Opportunity
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Targeting the African diaspora across UK, EU, and USA with significant untapped asset value
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
          <h3 className="text-2xl font-bold mb-8 text-center">Target Market Breakdown</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500/40 rounded-lg" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-purple-400">United Kingdom</h4>
              <p className="text-gray-300 text-sm">
                High-income African professionals in London and major cities with substantial home assets
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-cyan-500/40 rounded-lg" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-cyan-400">European Union</h4>
              <p className="text-gray-300 text-sm">
                African diaspora in Germany, France, and Netherlands seeking capital access
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-lg" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-purple-300">United States</h4>
              <p className="text-gray-300 text-sm">
                Growing African immigrant community with significant property holdings back home
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
