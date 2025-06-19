
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const DebtConsolidation = () => {
  const [activeComparison, setActiveComparison] = useState('rates');
  
  // Data for the approval rates bar chart
  const approvalRateData = [
    { name: 'Banks', rate: 65 },
    { name: 'NBFCs', rate: 54 },
    { name: 'Fintechs', rate: 70 },
    { name: 'Cashabhi', rate: 90 },
  ];
  
  // Get color for each bar based on name
  const getBarColor = (name: string) => {
    switch(name) {
      case 'Cashabhi': return "#0EA5E9";
      case 'Banks': return "#9b87f5";
      case 'NBFCs': return "#84CC16";
      case 'Fintechs': return "#F97316";
      default: return "#0EA5E9";
    }
  };
  
  return (
    <section className="section bg-gradient-to-b from-cashabhi-blue-light/30 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Debt Consolidation, <span className="text-cashabhi-blue">Redefined</span>
            </h2>
            <p className="text-lg mb-6 text-cashabhi-neutral-dark font-medium border-l-4 border-cashabhi-blue pl-4 bg-cashabhi-blue/5 py-2 text-cashabhi-blue">
              Use Cashabhi to consolidate high-interest loans from multiple sources into one affordable payment.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-cashabhi-blue flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-cashabhi-neutral-dark">Lower rates through our unique salary-deduction model, no collateral needed</span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-cashabhi-blue flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-cashabhi-neutral-dark">Employment-driven approvals, not just based on credit scores</span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-cashabhi-blue flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-cashabhi-neutral-dark">Simplify your finances with one loan, one automatic monthly deduction</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeComparison === 'rates' ? 'bg-cashabhi-blue text-white' : 'text-gray-500'
                  }`}
                  onClick={() => setActiveComparison('rates')}
                >
                  Interest Rates
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeComparison === 'eligibility' ? 'bg-cashabhi-blue text-white' : 'text-gray-500'
                  }`}
                  onClick={() => setActiveComparison('eligibility')}
                >
                  Eligibility
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeComparison === 'collateral' ? 'bg-cashabhi-blue text-white' : 'text-gray-500'
                  }`}
                  onClick={() => setActiveComparison('collateral')}
                >
                  Collateral
                </button>
              </div>
            </div>

            <div className="relative h-[300px] overflow-hidden">
              {/* Interest Rates Comparison */}
              <motion.div 
                className="absolute inset-0"
                initial={activeComparison === 'rates' ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                animate={activeComparison === 'rates' ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col gap-6 h-full justify-center">
                  <h3 className="text-xl font-semibold text-center">Interest Rate Comparison</h3>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Traditional Lenders</span>
                        <span className="font-semibold">24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cashabhi</span>
                        <span className="font-semibold">11.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-cashabhi-blue h-2.5 rounded-full" style={{ width: '48%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Eligibility Comparison with Bar Chart */}
              <motion.div 
                className="absolute inset-0"
                initial={activeComparison === 'eligibility' ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                animate={activeComparison === 'eligibility' ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col gap-3 h-full justify-center">
                  <h3 className="text-xl font-semibold text-center mb-2">Approval Rate Comparison</h3>
                  
                  <div className="h-52">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={approvalRateData}
                        margin={{
                          top: 5,
                          right: 20,
                          left: 0,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false}
                          domain={[0, 100]}
                          ticks={[0, 25, 50, 75, 100]}
                          tickFormatter={(value) => `${value}`}
                        />
                        <Bar 
                          dataKey="rate" 
                          fill="#0EA5E9" // Default color
                          radius={[4, 4, 0, 0]}
                        >
                          {approvalRateData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getBarColor(entry.name)} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Employment-based approval makes loans more accessible
                  </p>
                </div>
              </motion.div>

              {/* Collateral Comparison */}
              <motion.div 
                className="absolute inset-0"
                initial={activeComparison === 'collateral' ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                animate={activeComparison === 'collateral' ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col gap-6 h-full justify-center">
                  <h3 className="text-xl font-semibold text-center">Collateral Requirements</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h4 className="font-medium mb-2">Traditional Lenders</h4>
                        <div className="flex justify-center mb-2">
                          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-2xl font-bold">70%</span>
                          </div>
                        </div>
                        <p className="text-sm">require collateral</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <h4 className="font-medium mb-2">Cashabhi</h4>
                        <div className="flex justify-center mb-2">
                          <div className="h-20 w-20 rounded-full bg-cashabhi-blue-light flex items-center justify-center">
                            <span className="text-2xl font-bold">0%</span>
                          </div>
                        </div>
                        <p className="text-sm">requires no collateral</p>
                      </div>
                    </div>
                    <p className="text-sm text-center text-gray-600">
                      Our salary-deduction model eliminates the need for traditional collateral
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="font-medium mb-2">Why Cashabhi is different:</h4>
              <p className="text-sm text-cashabhi-neutral-dark">
                Our salary-deduction model significantly reduces default risk, allowing us to offer loans with lower interest rates, fewer collateral requirements, and more employment-focused approval criteria compared to traditional lenders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DebtConsolidation;
