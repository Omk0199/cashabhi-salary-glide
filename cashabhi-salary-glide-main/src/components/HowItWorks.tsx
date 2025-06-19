
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Card, 
  CardHeader, 
  CardContent 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(12);
  
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = 11.5 / 1200; // 11.5% annual to monthly
    const totalMonths = tenure;
    
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, totalMonths)) / 
               (Math.pow(1 + ratePerMonth, totalMonths) - 1);
               
    return Math.round(emi);
  };
  
  const emi = calculateEMI();
  const totalInterest = (emi * tenure) - loanAmount;
  
  const steps = [
    {
      number: "01",
      title: "Apply with employment details",
      description: "Complete a simple application form with your employment information. No need for extensive credit history or collateral."
    },
    {
      number: "02",
      title: "Get instant approval",
      description: "Our algorithm quickly processes your application based on employment verification, and provides an instant decision."
    },
    {
      number: "03",
      title: "Repay via salary deductions",
      description: "Monthly repayments are automatically deducted from your salary, making the process hassle-free and efficient."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-gradient-to-b from-white to-cashabhi-blue-light/30" id="how-it-works">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-cashabhi-neutral-dark max-w-2xl mx-auto">
            Our streamlined process makes accessing affordable loans simple and hassle-free
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-cashabhi-blue text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 h-16 w-[2px] bg-cashabhi-blue/20"></div>
                  )}
                </div>
                
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-cashabhi-neutral-dark">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-cashabhi-blue text-white">
                <h3 className="text-xl font-semibold">Loan Calculator</h3>
                <p className="text-white/80 text-sm">Estimate your monthly repayments</p>
              </CardHeader>
              
              <CardContent className="p-6">
                <Tabs defaultValue="loan">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="loan">Personal Loan</TabsTrigger>
                    <TabsTrigger value="consolidation">Debt Consolidation</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="loan" className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm text-cashabhi-neutral-dark">Loan Amount</label>
                        <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                      </div>
                      <Slider 
                        value={[loanAmount]} 
                        min={10000} 
                        max={500000} 
                        step={5000}
                        onValueChange={(values) => setLoanAmount(values[0])}
                      />
                      <div className="flex justify-between text-xs text-cashabhi-neutral">
                        <span>₹10,000</span>
                        <span>₹5,00,000</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm text-cashabhi-neutral-dark">Tenure (Months)</label>
                        <span className="font-medium">{tenure} Months</span>
                      </div>
                      <Slider 
                        value={[tenure]} 
                        min={3} 
                        max={36} 
                        step={3}
                        onValueChange={(values) => setTenure(values[0])}
                      />
                      <div className="flex justify-between text-xs text-cashabhi-neutral">
                        <span>3 Months</span>
                        <span>36 Months</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <div className="bg-cashabhi-blue-light/30 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-cashabhi-neutral">Monthly Deduction</p>
                            <p className="text-2xl font-semibold">₹{emi.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-cashabhi-neutral">Total Interest</p>
                            <p className="text-lg font-semibold">₹{totalInterest.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full bg-cashabhi-orange hover:bg-cashabhi-orange-dark">
                        Apply Now
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="consolidation" className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm text-cashabhi-neutral-dark">Total Debt Amount</label>
                        <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                      </div>
                      <Slider 
                        value={[loanAmount]} 
                        min={50000} 
                        max={1000000} 
                        step={10000}
                        onValueChange={(values) => setLoanAmount(values[0])}
                      />
                      <div className="flex justify-between text-xs text-cashabhi-neutral">
                        <span>₹50,000</span>
                        <span>₹10,00,000</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm text-cashabhi-neutral-dark">Tenure (Months)</label>
                        <span className="font-medium">{tenure} Months</span>
                      </div>
                      <Slider 
                        value={[tenure]} 
                        min={6} 
                        max={48} 
                        step={6}
                        onValueChange={(values) => setTenure(values[0])}
                      />
                      <div className="flex justify-between text-xs text-cashabhi-neutral">
                        <span>6 Months</span>
                        <span>48 Months</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <div className="bg-cashabhi-blue-light/30 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-cashabhi-neutral">Monthly Deduction</p>
                            <p className="text-2xl font-semibold">₹{emi.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-cashabhi-neutral">Total Interest</p>
                            <p className="text-lg font-semibold">₹{totalInterest.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg">
                      <p>You could save up to ₹{Math.round(totalInterest * 0.3).toLocaleString()} with Cashabhi versus high-interest loans.</p>
                    </div>
                    
                    <div className="mt-4">
                      <Button className="w-full bg-cashabhi-orange hover:bg-cashabhi-orange-dark">
                        Consolidate Now
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
