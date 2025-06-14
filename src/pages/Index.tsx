
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import MarketStats from "../components/MarketStats";
import ValueProps from "../components/ValueProps";
import Team from "../components/Team";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <MarketStats />
      <ValueProps />
      <Team />
      <CallToAction />
    </div>
  );
};

export default Index;
