
import { Shield, ShieldCheck } from "lucide-react";

const ValueProps = () => {
  const features = [
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">⚡</div>,
      title: "Instant Settlement",
      description: "Smart contracts enable loan disbursement in minutes, not weeks"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Self Custody", 
      description: "You maintain full control of your LQT tokens with non-custodial solutions"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: "Regulation Ready",
      description: "Built with compliance frameworks for UK, EU, and international regulations"
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">🔒</div>,
      title: "Enhanced Security",
      description: "Multi-signature wallets and enterprise-level security protocols"
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">🌍</div>,
      title: "Cross-Border",
      description: "Access loans from anywhere using property from anywhere in the world"
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">💰</div>,
      title: "Low Commission",
      description: "Only 2% commission per transaction with transparent pricing"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              LiQuiTize
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for the diaspora community with cutting-edge blockchain technology and user-first design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Revenue Model & Funding</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2%</div>
              <div className="text-sm text-gray-300">Commission Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">£100K</div>
              <div className="text-sm text-gray-300">Seed Funding</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-sm text-gray-300">Country Incorporation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">MVP</div>
              <div className="text-sm text-gray-300">Development Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
