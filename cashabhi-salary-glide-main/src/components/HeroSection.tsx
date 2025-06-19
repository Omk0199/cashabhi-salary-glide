import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const HeroSection = () => {
  return <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-cashabhi-blue-light/30 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fast, Affordable Loans—
              <span className="gradient-text">Repaid Directly from Your Salary</span>
            </h1>
            
            <p className="text-lg md:text-xl text-cashabhi-neutral-dark max-w-xl">
              Cashabhi offers collateral-free micro-loans with low rates, repaid seamlessly via salary deductions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-cashabhi-orange hover:bg-cashabhi-orange-dark text-white font-medium">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="border-cashabhi-blue text-cashabhi-blue hover:bg-cashabhi-blue/10">
                Partner with Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-cashabhi-blue to-cashabhi-blue-light/80 rounded-2xl overflow-hidden">
                <div className="w-full h-full opacity-20 bg-hero-pattern bg-no-repeat bg-center bg-cover"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-xl p-6 w-[80%] max-w-md shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-300 mx-0 py-[45px] px-[30px]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-cashabhi-neutral">Loan Amount</p>
                        <p className="text-xl font-bold">₹50,000</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M2 17a5 5 0 0 1 10 0c0 2.5-2 3-2 3H4s-2-.5-2-3Z" /><path d="M12 17a5 5 0 0 1 10 0c0 2.5-2 3-2 3h-6s-2-.5-2-3Z" /><path d="M2 8a5 5 0 0 1 10 0c0 2.5-2 3-2 3H4S2 10.5 2 8Z" /><path d="M12 8a5 5 0 0 1 10 0c0 2.5-2 3-2 3h-6s-2-.5-2-3Z" /></svg>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-cashabhi-neutral">Monthly Deduction</p>
                        <p className="text-lg font-semibold">₹4,500</p>
                      </div>
                      <div>
                        <p className="text-sm text-cashabhi-neutral">Interest Rate</p>
                        <p className="text-lg font-semibold">9% p.a.*</p>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 glass rounded-lg p-4 transform rotate-6 hover:rotate-0 transition-all duration-300 animate-float">
                <div className="text-center">
                  <p className="text-sm text-white/80">Approved In</p>
                  <p className="text-2xl font-bold text-white">2 Minutes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;