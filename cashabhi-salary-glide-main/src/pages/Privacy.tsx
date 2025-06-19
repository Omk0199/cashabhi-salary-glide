
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>Last updated: May 14, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              At Cashabhi, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our financial services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties such as your employer.
            </p>
            
            <h3>Personal Information</h3>
            <p>
              This may include your name, address, email address, phone number, date of birth, government identification numbers, employment information, financial information, and other information you provide to us.
            </p>
            
            <h3>Automatically Collected Information</h3>
            <p>
              When you access our services, we automatically collect certain information, including your IP address, browser type, operating system, mobile device information, and usage details.
            </p>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and comply with legal obligations.
            </p>
            
            <h2>4. Sharing of Your Information</h2>
            <p>
              We may share your information with your employer (for salary deduction purposes), service providers, financial partners, legal authorities, and business partners as necessary to provide our services.
            </p>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
            
            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your information.
            </p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@cashabhi.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
