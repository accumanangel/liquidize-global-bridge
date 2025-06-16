const Problem = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The Challenge Facing
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              10+ Million Diaspora Members
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valuable assets locked away in home countries, inaccessible when you need capital most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Stranded Assets</h3>
            <p className="text-gray-600 leading-relaxed">
              Properties, land, and businesses worth millions remain locked in home countries, 
              unable to provide liquidity when needed abroad.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Credit Barriers</h3>
            <p className="text-gray-600 leading-relaxed">
              Traditional banks don't recognize foreign assets, forcing successful diaspora 
              members to start from zero despite substantial wealth.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Complex Process</h3>
            <p className="text-gray-600 leading-relaxed">
              Cross-border asset verification is slow, expensive, and often impossible 
              through traditional financial systems.
            </p>
          </div>
        </div>

        {/* Impact stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$2.4T</div>
              <div className="text-gray-300">Locked Asset Value Globally</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">281M</div>
              <div className="text-gray-300">International Migrants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">68%</div>
              <div className="text-gray-300">Underbanked Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;