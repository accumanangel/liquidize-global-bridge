import { ArrowRight, CheckCircle } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Blockchain-Powered
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Asset Liberation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Liquitize transforms your illiquid global assets into instant, accessible capital 
            through secure blockchain technology.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Detailed Explanation */}
          <div className="space-y-8">
            {/* What is Liquitize */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What is Liquitize?</h3>
              <p className="text-gray-600 leading-relaxed">
                Liquitize is the world's first blockchain protocol specifically designed for the diaspora community. 
                We understand that millions of people living abroad own valuable properties, land, and businesses 
                in their home countries that remain financially inaccessible when they need capital most. Our revolutionary 
                platform bridges this gap by tokenizing your real-world assets into LQT (Liquitize Tokens) on the blockchain, 
                instantly unlocking their value for global financial access.
              </p>
            </div>

            {/* How It Works Overview */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Liquitize Advantage</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional banks don't recognize foreign assets, leaving diaspora members unable to leverage 
                their substantial wealth. Liquitize changes this by creating a secure, transparent, and 
                instant bridge between your global assets and immediate financial needs through certified 
                verification partners and blockchain technology.
              </p>
            </div>

            {/* Technology Behind It */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Powered by Blockchain</h3>
              <p className="text-gray-700 leading-relaxed">
                Our smart contract technology ensures complete transparency and security. Every asset 
                verification, token minting, and loan transaction is recorded immutably on the blockchain, 
                providing you with unprecedented trust and control while maintaining full custody of your LQT tokens.
              </p>
            </div>
          </div>

          {/* Right Column - Visual Process Flow */}
          <div className="space-y-8">
            {/* Visual Process Flow */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Register & Verify</h4>
                    <p className="text-gray-600">Complete KYC and register your properties, land, or businesses with our secure verification system.</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Tokenize Assets</h4>
                    <p className="text-gray-600">Independent partners verify your assets and mint LQT tokens representing their verified value on the blockchain.</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Access Instant Loans</h4>
                    <p className="text-gray-600">Use your LQT tokens as collateral for instant loans in any supported currency, anywhere in the world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;