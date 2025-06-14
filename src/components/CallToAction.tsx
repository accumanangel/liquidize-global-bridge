
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Unlock Your
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Property's Value?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access to LiQuiTize and be among the first diaspora members to tokenize your property for global financial access.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 flex-1"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
          </form>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Early access benefits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Reduced commission rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Beta testing privileges</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">
              Questions? Get in touch with our founder
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:emmanuel@liquidize.finance" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                emmanuel@liquidize.finance
              </a>
              <span className="text-gray-600 hidden sm:block">•</span>
              <a 
                href="tel:+447415425512" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +44 7415 425512
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                LiQuiTize
              </span>
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
