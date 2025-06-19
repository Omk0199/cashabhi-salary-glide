
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
          <div className="prose max-w-none mb-12">
            <p className="text-lg">
              Cashabhi makes getting a loan simple, transparent, and hassle-free. Here's how our process works:
            </p>
          </div>
          
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
