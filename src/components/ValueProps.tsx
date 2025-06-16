import { Shield, Zap, Globe, Lock, DollarSign, Users } from "lucide-react";

const ValueProps = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Instant Settlement",
      description: "Smart contracts enable loan disbursement in minutes, not weeks",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Self Custody", 
      description: "You maintain full control of your LQT tokens with non-custodial solutions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Enhanced Security",
      description: "Multi-signature wallets and enterprise-level security protocols",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Cross-Border",
      description: "Access loans from anywhere using property from anywhere in the world",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Competitive Rates",
      description: "Transparent pricing with competitive interest rates and minimal fees",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Regulation Ready",
      description: "Built with compliance frameworks for UK, EU, and international regulations",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Choose
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Liquitize
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for the diaspora community with cutting-edge blockchain technology and user-first design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Trusted by the Diaspora Community</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">10M+</div>
              <div className="text-sm text-gray-600">Target Diaspora Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">$850B</div>
              <div className="text-sm text-gray-600">Addressable Asset Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">3</div>
              <div className="text-sm text-gray-600">Primary Markets</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-gray-600">Global Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;