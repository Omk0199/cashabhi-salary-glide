
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cashabhi-neutral-dark text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Cashabhi</h3>
            <p className="text-white/70">
              Fast, affordable micro-loans for corporate employees, repaid directly from your salary.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/debt-consolidation" className="text-white/70 hover:text-white transition-colors">Debt Consolidation</Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-white/70 hover:text-white transition-colors">Partnerships</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Use Cases</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">Medical Bills</Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">Vehicle Purchase/Repair</Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">Wedding/Life Events</Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">Moving/Relocation</Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">Household Expenses</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-white/70 mb-4">Stay updated with the latest offers and news</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-cashabhi-blue hover:bg-cashabhi-blue-dark whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Cashabhi. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/70 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-white/70 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-white/70 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
