import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission here
    setEmail("");
  };

  return (
    <section id="get-started" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Unlock Your
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Asset's Potential?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access to Liquitize and be among the first diaspora members to leverage your global assets.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:ring-0"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 h-12 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Early access benefits</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Priority onboarding</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Exclusive updates</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-4">
              Questions? Get in touch with our team
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:hello@liquitize.finance" 
                className="flex items-center justify-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@liquitize.finance</span>
              </a>
              <span className="text-gray-300 hidden sm:block">•</span>
              <a 
                href="tel:+447415425512" 
                className="flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+44 7415 425512</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0 flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-lg transform rotate-12 opacity-90"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-lg transform -rotate-12"></div>
              </div>
              <span className="text-xl font-bold text-white">Liquitize</span>
              <span className="ml-4">© 2024 All rights reserved</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;