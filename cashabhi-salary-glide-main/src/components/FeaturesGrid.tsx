
import React from 'react';
import { motion } from "framer-motion";
import { CreditCard, Clock, Users, PiggyBank } from "lucide-react";

const features = [
  {
    icon: <CreditCard className="h-10 w-10 text-cashabhi-blue" />,
    title: "Salary-Deduction Repayment",
    description: "Lower rates through automatic deductions from your monthly salary, making repayments hassle-free."
  },
  {
    icon: <Clock className="h-10 w-10 text-cashabhi-blue" />,
    title: "Quick Access",
    description: "Instant approval and disbursement, putting money in your account when you need it most."
  },
  {
    icon: <Users className="h-10 w-10 text-cashabhi-blue" />,
    title: "Inclusive Eligibility",
    description: "Based on employment, not just credit scores, making loans accessible to more people."
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-cashabhi-blue" />,
    title: "Debt Consolidation",
    description: "Affordable consolidation with broader access to help you manage your finances efficiently."
  }
];

const FeaturesGrid = () => {
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
    <section className="section bg-gradient-to-b from-white to-cashabhi-blue-light/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-cashabhi-neutral-dark max-w-2xl mx-auto">
            Experience the advantages of Cashabhi's innovative approach to personal loans
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="feature-card hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="h-16 w-16 bg-cashabhi-blue-light/30 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-cashabhi-neutral-dark">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
