
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <p>Last updated: May 14, 2025</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Cashabhi's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            
            <h2>2. Description of Services</h2>
            <p>
              Cashabhi provides financial services including micro-loans to corporate employees, repaid through salary deductions. Specific terms of loans are provided separately during the application process.
            </p>
            
            <h2>3. Eligibility</h2>
            <p>
              To use our services, you must be employed by a company that has partnered with Cashabhi, be at least 18 years old, and meet other eligibility criteria as determined by Cashabhi.
            </p>
            
            <h2>4. Account Registration</h2>
            <p>
              You may need to register for an account to access certain features. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            
            <h2>5. Loan Terms</h2>
            <p>
              Specific loan terms, including interest rates, repayment schedules, and fees, will be provided during the application process and in your loan agreement.
            </p>
            
            <h2>6. Salary Deduction Authorization</h2>
            <p>
              By using our services, you authorize your employer to deduct loan repayments from your salary as agreed in your loan terms.
            </p>
            
            <h2>7. Intellectual Property</h2>
            <p>
              All content on our website and services is the property of Cashabhi and is protected by copyright and other intellectual property laws.
            </p>
            
            <h2>8. Limitation of Liability</h2>
            <p>
              Cashabhi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
            
            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of India, without regard to its conflict of law principles.
            </p>
            
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of our services after such modifications constitutes your acceptance of the revised Terms.
            </p>
            
            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at legal@cashabhi.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
