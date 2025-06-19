
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose max-w-none">
            <p>Last updated: May 14, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              This Cookie Policy explains how Cashabhi uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>2. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work more efficiently and to provide reporting information.
            </p>
            
            <h2>3. Why Do We Use Cookies?</h2>
            <p>
              We use cookies for several purposes, including to:
            </p>
            <ul>
              <li>Enable certain functions of the website</li>
              <li>Provide analytics</li>
              <li>Store your preferences</li>
              <li>Enable advertisement delivery</li>
              <li>Improve user experience</li>
            </ul>
            
            <h2>4. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly and cannot be switched off in our systems.
            </p>
            
            <h3>Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
            </p>
            
            <h3>Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization.
            </p>
            
            <h3>Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners to build a profile of your interests.
            </p>
            
            <h2>5. How to Control Cookies</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            
            <h2>6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at privacy@cashabhi.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
