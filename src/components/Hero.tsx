import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center pt-20">
        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-gray-700">Blockchain-Secured Protocol</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Unlock the Value in Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Global Assets
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          The first blockchain protocol that lets diaspora members leverage their properties, 
          land, and businesses back home to access instant loans abroad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start Your Application
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
          >
            Learn How It Works
          </Button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Settlement</h3>
            <p className="text-gray-600">Loans processed in minutes, not weeks</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4 mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Self Custody</h3>
            <p className="text-gray-600">You maintain full control of your assets</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Border</h3>
            <p className="text-gray-600">Access global liquidity seamlessly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;