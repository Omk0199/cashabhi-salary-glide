
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-cashabhi-blue">Cashabhi</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-cashabhi-neutral-dark hover:text-cashabhi-blue transition-colors">Features</Link>
            <Link to="/debt-consolidation" className="text-cashabhi-neutral-dark hover:text-cashabhi-blue transition-colors">Debt Consolidation</Link>
            <Link to="/partnerships" className="text-cashabhi-neutral-dark hover:text-cashabhi-blue transition-colors">Partnerships</Link>
            <Link to="/how-it-works" className="text-cashabhi-neutral-dark hover:text-cashabhi-blue transition-colors">How It Works</Link>
            <Link to="/contact">
              <Button variant="outline" className="font-medium">Contact Us</Button>
            </Link>
          </nav>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/features" className="px-4 py-2 hover:bg-cashabhi-blue-light/30 rounded-lg transition-colors">Features</Link>
            <Link to="/debt-consolidation" className="px-4 py-2 hover:bg-cashabhi-blue-light/30 rounded-lg transition-colors">Debt Consolidation</Link>
            <Link to="/partnerships" className="px-4 py-2 hover:bg-cashabhi-blue-light/30 rounded-lg transition-colors">Partnerships</Link>
            <Link to="/how-it-works" className="px-4 py-2 hover:bg-cashabhi-blue-light/30 rounded-lg transition-colors">How It Works</Link>
            <Link to="/contact">
              <Button variant="default" className="bg-cashabhi-blue w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
