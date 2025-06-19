
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion, LayoutGroup } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const HeroSection = () => {
  // Example images representing different loan use cases
  const loanExampleImages = [
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      alt: "Medical bills and healthcare",
      title: "Medical Bills"
    },
    {
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13", 
      alt: "New bike purchase",
      title: "Bike Purchase"
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      alt: "Moving and relocation",
      title: "Relocation"
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552",
      alt: "Wedding celebration",
      title: "Wedding"
    },
    {
      url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
      alt: "Travel and vacation",
      title: "Travel"
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
      alt: "Skill development and education",
      title: "Skill Development"
    }
  ];

  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative bg-gradient-to-b from-cashabhi-blue-light/30 to-white">
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.div
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl bg-white p-2 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img
              src={loanExampleImages[0].url}
              alt={loanExampleImages[0].alt}
              className="w-full h-8 object-cover rounded"
            />
            <span className="text-xs font-medium text-cashabhi-blue mt-1">Medical</span>
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.div
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl bg-white p-3 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <img
              src={loanExampleImages[1].url}
              alt={loanExampleImages[1].alt}
              className="w-full h-20 sm:h-24 md:h-32 lg:h-36 object-cover rounded"
            />
            <span className="text-sm font-medium text-cashabhi-blue mt-2">New Bike</span>
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl bg-white p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <img
              src={loanExampleImages[2].url}
              alt={loanExampleImages[2].alt}
              className="w-full h-32 sm:h-36 md:h-44 lg:h-48 object-cover rounded"
            />
            <span className="text-sm font-medium text-cashabhi-blue mt-2">Relocation</span>
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.div
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl bg-white p-3 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <img
              src={loanExampleImages[3].url}
              alt={loanExampleImages[3].alt}
              className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded"
            />
            <span className="text-sm font-medium text-cashabhi-blue mt-2">Wedding</span>
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.div
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl bg-white p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <img
              src={loanExampleImages[4].url}
              alt={loanExampleImages[4].alt}
              className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover rounded"
            />
            <span className="text-lg font-medium text-cashabhi-blue mt-3">Travel</span>
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bold tracking-tight space-y-1 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span className="text-cashabhi-neutral-dark">Fast loans for your </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <TextRotate
                texts={[
                  "Medical Bills",
                  "Car Purchase", 
                  "Relocation",
                  "Wedding",
                  "Travel",
                  "Skill Development"
                ]}
                mainClassName="overflow-hidden text-cashabhi-orange font-bold"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-cashabhi-neutral-dark text-center font-medium pt-4 sm:pt-8 md:pt-10 lg:pt-12 max-w-2xl"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Collateral-free micro-loans with low rates, repaid seamlessly via salary deductions. Approved in just 2 minutes.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Button size="lg" className="bg-cashabhi-orange hover:bg-cashabhi-orange-dark text-white font-medium text-lg px-8 py-3">
              Apply Now
            </Button>
          </motion.div>
          
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.8,
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Button variant="outline" size="lg" className="border-cashabhi-blue text-cashabhi-blue hover:bg-cashabhi-blue/10 font-medium text-lg px-8 py-3">
              Partner with Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
