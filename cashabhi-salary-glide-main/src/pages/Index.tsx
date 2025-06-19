
import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CreditUseCases from "../components/CreditUseCases";
import FeaturesGrid from "../components/FeaturesGrid";
import DebtConsolidation from "../components/DebtConsolidation";
import HowItWorks from "../components/HowItWorks";
import EmployerPartnership from "../components/EmployerPartnership";
import SocialProof from "../components/SocialProof";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CreditUseCases />
        <FeaturesGrid />
        <DebtConsolidation />
        <HowItWorks />
        <EmployerPartnership />
        <SocialProof />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
