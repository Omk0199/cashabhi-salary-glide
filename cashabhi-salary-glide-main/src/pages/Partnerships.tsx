
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmployerPartnership from "../components/EmployerPartnership";

const Partnerships = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Partnerships</h1>
          <div className="prose max-w-none mb-12">
            <p className="text-lg">
              Join Cashabhi as a partner and offer valuable financial wellness benefits to your employees at zero cost and zero risk to your organization.
            </p>
          </div>
          
          <EmployerPartnership />
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Enhanced Employee Benefits</h3>
                <p>Offer a valuable financial wellness benefit that helps attract and retain top talent.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Zero Cost Implementation</h3>
                <p>No implementation or maintenance costs for your organization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Improved Productivity</h3>
                <p>Employees with reduced financial stress show higher engagement and productivity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnerships;
