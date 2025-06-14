
import { ArrowDown } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Web3-Powered
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Asset Liberation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LiQuiTize bridges traditional real estate with DeFi, creating liquid, 
            globally accessible collateral from your property anywhere in the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Flow */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Property Verification</h3>
                <p className="text-gray-300">AI-powered verification system validates your property ownership and value using blockchain oracles.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-cyan-400" />
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Asset Tokenization</h3>
                <p className="text-gray-300">Your property is represented as a secure NFT on the blockchain, maintaining full ownership rights.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-cyan-400" />
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Instant Liquidity</h3>
                <p className="text-gray-300">Use your tokenized asset as collateral for instant loans in any supported currency, anywhere.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Advantages</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-purple-400 mb-1">Global Accessibility</h4>
                  <p className="text-gray-300 text-sm">Access loans from anywhere using property from anywhere</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-cyan-400 mb-1">Instant Settlement</h4>
                  <p className="text-gray-300 text-sm">Smart contracts enable immediate loan disbursement</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-purple-400 mb-1">Lower Costs</h4>
                  <p className="text-gray-300 text-sm">Eliminate intermediaries and reduce fees by up to 80%</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-cyan-400 mb-1">Full Ownership</h4>
                  <p className="text-gray-300 text-sm">Maintain complete control and ownership of your assets</p>
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
