
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import DebtConsolidation from "../components/DebtConsolidation";

const DebtConsolidationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Debt Consolidation</h1>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-center max-w-2xl mx-auto">
              Cashabhi's debt consolidation service provides a uniquely accessible and affordable way to simplify your finances by replacing high-interest loans with one manageable payment.
            </p>
          </div>
          
          <DebtConsolidation />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DebtConsolidationPage;
