import { CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Account Creation & KYC",
      description: "Create your secure Liquitize account with comprehensive identity verification",
      icon: "👤",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "02", 
      title: "Asset Registration",
      description: "Register your properties, land, or businesses with detailed documentation",
      icon: "🏠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Independent Verification", 
      description: "Our certified partners verify your assets and conduct professional valuations",
      icon: "✅",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "LQT Token Minting",
      description: "Your verified assets are tokenized as LQT tokens on the blockchain",
      icon: "🪙",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "05",
      title: "Smart Contract Signing",
      description: "Secure your loan with LQT tokens as collateral through smart contracts",
      icon: "📝",
      color: "from-indigo-500 to-blue-500"
    },
    {
      number: "06",
      title: "Instant Loan Disbursement",
      description: "Receive your loan funds immediately upon contract execution",
      icon: "💰",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How It
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six simple steps to unlock liquidity from your global assets
          </p>
        </div>

        {/* Horizontal Flow Layout */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex space-x-8 min-w-max px-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Step Card */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 w-80 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">
                      STEP {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:hidden">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {step.icon}
              </div>
              
              {/* Step Number */}
              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">
                  STEP {step.number}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">The Complete Journey</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold">
                🏠
              </div>
              <div>
                <div className="font-semibold text-gray-900">Your Assets</div>
                <div className="text-sm text-gray-600">Properties & Businesses</div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 transform md:rotate-0 rotate-90" />

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                🪙
              </div>
              <div>
                <div className="font-semibold text-gray-900">LQT Tokens</div>
                <div className="text-sm text-gray-600">Blockchain Representation</div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 transform md:rotate-0 rotate-90" />

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold">
                💰
              </div>
              <div>
                <div className="font-semibold text-gray-900">Instant Loans</div>
                <div className="text-sm text-gray-600">Global Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to unlock your assets?</h3>
            <p className="text-gray-300 mb-6">Join thousands of diaspora members already leveraging their global wealth</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Secure & Transparent</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Self-Custody Tokens</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Instant Settlement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;