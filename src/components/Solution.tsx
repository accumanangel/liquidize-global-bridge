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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Flow */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Asset Registration</h3>
                <p className="text-gray-600">Complete KYC and register your properties, land, or businesses with our secure verification system.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Blockchain Verification</h3>
                <p className="text-gray-600">Independent partners verify your assets and mint LQT tokens representing their verified value on the blockchain.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Instant Liquidity</h3>
                <p className="text-gray-600">Use your LQT tokens as collateral for instant loans in any supported currency, anywhere in the world.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Why Liquitize Works</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Accessibility</h4>
                  <p className="text-gray-600 text-sm">Access loans from anywhere using assets from anywhere</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instant Settlement</h4>
                  <p className="text-gray-600 text-sm">Smart contracts enable immediate loan disbursement</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Enhanced Security</h4>
                  <p className="text-gray-600 text-sm">Blockchain technology ensures transparent, immutable records</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Self Custody</h4>
                  <p className="text-gray-600 text-sm">Maintain complete control and ownership of your assets</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Regulation Ready</h4>
                  <p className="text-gray-600 text-sm">Built with compliance frameworks for international regulations</p>
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