
const Problem = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The $2.4 Trillion
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Locked Asset Problem
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-red-500/40 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">Stranded Assets</h3>
            <p className="text-gray-300 leading-relaxed">
              Millions of immigrants own valuable property back home but can't use it as collateral for loans in their new countries.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-orange-500/40 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Credit Barriers</h3>
            <p className="text-gray-300 leading-relaxed">
              Traditional banks don't recognize foreign assets, forcing immigrants to start from zero despite substantial wealth.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-yellow-500/40 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Complex Process</h3>
            <p className="text-gray-300 leading-relaxed">
              Cross-border asset verification is slow, expensive, and often impossible through traditional financial systems.
            </p>
          </div>
        </div>

        {/* Impact stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">281M</div>
              <div className="text-gray-300">International Migrants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$2.4T</div>
              <div className="text-gray-300">Locked Asset Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">68%</div>
              <div className="text-gray-300">Underbanked Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
