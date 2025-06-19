
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Features</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Cashabhi offers a range of unique features designed to make financing accessible and affordable:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Salary-Deduction Repayment</h3>
                <p>Lower interest rates through automatic salary deductions, making repayment seamless and stress-free.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Quick Access</h3>
                <p>Instant approval and disbursement processes, ensuring you get funds when you need them most.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Inclusive Eligibility</h3>
                <p>Approvals based primarily on employment status, not just credit scores, making loans accessible to more people.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Debt Consolidation</h3>
                <p>Affordable consolidation options with broader access than traditional lenders offer.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
