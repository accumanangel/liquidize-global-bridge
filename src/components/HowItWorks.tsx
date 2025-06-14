
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Account Creation",
      description: "Create your secure LiQuiTize account with comprehensive KYC validation",
      icon: "👤"
    },
    {
      number: "02", 
      title: "Asset Verification",
      description: "Our partners verify your property assets and legal deeds",
      icon: "✅"
    },
    {
      number: "03",
      title: "Property Valuation", 
      description: "Professional valuation of your property to determine accurate market value",
      icon: "📊"
    },
    {
      number: "04",
      title: "LQT Token Minting",
      description: "Your verified assets are minted as LQT tokens representing their value",
      icon: "🏠"
    },
    {
      number: "05",
      title: "Collateral Lock",
      description: "Lock your LQT tokens as collateral to secure your loan",
      icon: "🔒"
    },
    {
      number: "06",
      title: "Loan Release",
      description: "Receive instant loan disbursement once collateral is secured",
      icon: "💰"
    },
    {
      number: "07",
      title: "Loan Repayment",
      description: "Repay your loan plus interest through our flexible payment system",
      icon: "🔄"
    },
    {
      number: "08",
      title: "Token Return",
      description: "Your LQT tokens are unlocked and returned once loan is fully repaid",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Eight simple steps to unlock liquidity from your global property assets
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                    <div className="text-sm font-bold text-purple-400 mb-2">STEP {step.number}</div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl relative z-10 lg:flex-shrink-0">
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
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-300 mb-6">Join the diaspora community already leveraging their global assets</p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>2% commission only</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Self-custody tokens</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Instant settlement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
