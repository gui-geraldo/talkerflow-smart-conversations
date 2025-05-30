
import HeroContent from './HeroContent';
import PhoneMockup from './PhoneMockup';
import ComparisonSection from './ComparisonSection';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <PhoneMockup />
        </div>
        <ComparisonSection />
      </div>
    </section>
  );
};

export default HeroSection;
