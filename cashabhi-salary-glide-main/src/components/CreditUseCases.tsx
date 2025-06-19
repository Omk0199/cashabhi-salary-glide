
import React from 'react';
import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Hospital, 
  CarFront, 
  ArrowDownUp, 
  Move, 
  Package, 
  Plane, 
  House 
} from "lucide-react";

const useCases = [
  {
    icon: <Hospital className="h-8 w-8 text-white" />,
    title: "Medical Bills",
    color: "from-blue-500 to-blue-600",
    description: "Cover unexpected healthcare expenses with manageable repayments"
  },
  {
    icon: <CarFront className="h-8 w-8 text-white" />,
    title: "Vehicle Expenses",
    color: "from-green-500 to-green-600",
    description: "Finance vehicle purchases or repairs through your salary"
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-white" />,
    title: "Life Events",
    color: "from-red-400 to-red-500",
    description: "Fund weddings and important life milestones stress-free"
  },
  {
    icon: <ArrowDownUp className="h-8 w-8 text-white" />,
    title: "Debt Repayment",
    color: "from-orange-500 to-orange-600",
    description: "Consolidate and repay existing high-interest debts"
  },
  {
    icon: <Move className="h-8 w-8 text-white" />,
    title: "Relocation",
    color: "from-purple-500 to-purple-600",
    description: "Finance your move to a new home or city with ease"
  },
  {
    icon: <Package className="h-8 w-8 text-white" />,
    title: "Major Purchases",
    color: "from-indigo-500 to-indigo-600",
    description: "Fund significant purchases with affordable installments"
  },
  {
    icon: <Plane className="h-8 w-8 text-white" />,
    title: "Travel",
    color: "from-cyan-500 to-cyan-600",
    description: "Plan your dream vacation with predictable repayments"
  },
  {
    icon: <House className="h-8 w-8 text-white" />,
    title: "Household Expenses",
    color: "from-teal-500 to-teal-600",
    description: "Cover home repairs and improvements through salary deductions"
  }
];

const CreditUseCases = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Can Use Cashabhi</h2>
          <p className="text-cashabhi-neutral-dark max-w-2xl mx-auto">
            Access affordable credit for all your important life needs through simple salary deductions
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 bg-gradient-to-br ${useCase.color}`}
            >
              <div className="p-5 text-white">
                <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-white/90">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreditUseCases;
