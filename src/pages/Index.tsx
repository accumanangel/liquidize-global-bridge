
import Header from "../components/Header";
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
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="problem">
        <Problem />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="market">
        <MarketStats />
      </div>
      <div id="value-props">
        <ValueProps />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="cta">
        <CallToAction />
      </div>
    </div>
  );
};

export default Index;
