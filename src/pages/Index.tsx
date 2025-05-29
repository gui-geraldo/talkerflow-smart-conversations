
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import BenefitsSection from '../components/BenefitsSection';
import SocialProofSection from '../components/SocialProofSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
