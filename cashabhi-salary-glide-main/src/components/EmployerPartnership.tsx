
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EmployerPartnership = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Your Team—Zero Cost, Zero Risk</h2>
          <p className="text-cashabhi-neutral-dark max-w-2xl mx-auto">
            Partner with Cashabhi to offer employees affordable loans from day one. No cost to you, just better financial wellness and retention.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="bg-cashabhi-blue p-4 text-white font-semibold">
                  HR Manager
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-cashabhi-blue-light/50 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cashabhi-blue"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div>
                      <p className="italic text-cashabhi-neutral-dark mb-3">
                        "Partnering with Cashabhi has significantly improved our employee retention rates. Their financial wellness offering truly sets us apart in the job market, without adding any costs to our balance sheet."
                      </p>
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-sm text-cashabhi-neutral">HR Director, TechCorp India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div className="h-16 flex items-center justify-center bg-gray-100 rounded-lg py-4">
                <span className="text-cashabhi-neutral-dark font-medium">TechCorp</span>
              </div>
              <div className="h-16 flex items-center justify-center bg-gray-100 rounded-lg py-4">
                <span className="text-cashabhi-neutral-dark font-medium">GlobalServe</span>
              </div>
              <div className="h-16 flex items-center justify-center bg-gray-100 rounded-lg py-4">
                <span className="text-cashabhi-neutral-dark font-medium">InnovateX</span>
              </div>
              <div className="h-16 flex items-center justify-center bg-gray-100 rounded-lg py-4">
                <span className="text-cashabhi-neutral-dark font-medium">MindTree</span>
              </div>
              <div className="h-16 flex items-center justify-center bg-gray-100 rounded-lg py-4">
                <span className="text-cashabhi-neutral-dark font-medium">NextWave</span>
              </div>
              <div className="h-16 flex items-center justify-center bg-gray-100 rounded-lg py-4">
                <span className="text-cashabhi-neutral-dark font-medium">FutureTech</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-cashabhi-blue to-cashabhi-green p-8 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-semibold mb-6">Benefits for Employers</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Zero Cost Implementation</h4>
                  <p className="text-white/80">No setup fees, no maintenance costs—just a valuable employee benefit at zero expense.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Improved Retention</h4>
                  <p className="text-white/80">Financial wellness benefits significantly increase employee satisfaction and retention rates.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Enhanced Productivity</h4>
                  <p className="text-white/80">Employees with reduced financial stress are more focused and productive at work.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Simple Integration</h4>
                  <p className="text-white/80">Seamless setup with your existing payroll system with minimal administrative burden.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="bg-white text-cashabhi-blue hover:bg-white/90 w-full">
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmployerPartnership;
