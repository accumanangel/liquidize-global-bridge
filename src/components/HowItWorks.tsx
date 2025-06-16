import { CheckCircle } from "lucide-react";

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How It
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six simple steps to unlock liquidity from your global assets
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-200 via-blue-200 to-purple-200 rounded-full hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-sm font-bold text-orange-500 mb-2">STEP {step.number}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-3xl relative z-10 lg:flex-shrink-0 shadow-lg`}>
                  {step.icon}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
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