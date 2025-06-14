
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            LiQuiTize
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Main headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Unlock Your Property's
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Global Potential
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          The first Web3 platform that lets immigrants tokenize property back home 
          and access instant loans abroad. Your assets, everywhere.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Early Access
          </Button>
        </div>

        {/* Abstract illustration placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="grid grid-cols-3 gap-8 items-center">
              {/* Property representation */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg" />
                </div>
                <span className="text-sm text-gray-300">Property</span>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-cyan-400 transform rotate-90" />
              </div>
              
              {/* Token representation */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/30 rounded-full" />
                </div>
                <span className="text-sm text-gray-300">Digital Token</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
