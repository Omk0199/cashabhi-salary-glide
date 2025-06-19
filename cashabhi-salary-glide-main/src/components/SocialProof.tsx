
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Raj Kapoor",
    role: "Software Engineer",
    company: "TechCorp India",
    quote: "Saved significantly on interest with debt consolidation through Cashabhi. The salary deduction makes repayment completely hassle-free.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "HR Manager",
    company: "GlobalServe Ltd",
    quote: "Offering Cashabhi as a financial wellness benefit has improved our team satisfaction and retention rates significantly. A great partnership at zero cost.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Operations Specialist",
    company: "NextWave Solutions",
    quote: "When we needed funds for a family medical emergency, Cashabhi came through with quick approval and favorable terms. Their service was a lifesaver.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  }
];

const SocialProof = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-cashabhi-neutral-dark max-w-2xl mx-auto">
            Hear from employees who have benefited from our loans and employers who partner with us
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-cashabhi-neutral">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <svg className="h-6 w-6 text-cashabhi-blue opacity-40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="mt-2 text-cashabhi-neutral-dark">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium mb-8">Trusted by leading companies across India</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="h-12">
              <span className="text-xl font-bold text-cashabhi-neutral-dark">TechCorp</span>
            </div>
            <div className="h-12">
              <span className="text-xl font-bold text-cashabhi-neutral-dark">GlobalServe</span>
            </div>
            <div className="h-12">
              <span className="text-xl font-bold text-cashabhi-neutral-dark">NextWave</span>
            </div>
            <div className="h-12">
              <span className="text-xl font-bold text-cashabhi-neutral-dark">InnovateX</span>
            </div>
            <div className="h-12">
              <span className="text-xl font-bold text-cashabhi-neutral-dark">MindTree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
