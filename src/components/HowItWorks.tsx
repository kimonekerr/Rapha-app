import React from 'react';
import { Smartphone, UserPlus, Stethoscope, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import AmbulanceAnimation from './AmbulanceAnimation';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600" />,
      title: "Download the App",
      description: "Get started by downloading the Rapha app on your smartphone."
    },
    {
      icon: <UserPlus className="h-12 w-12 text-purple-600" />,
      title: "Create Your Profile",
      description: "Set up your health profile and connect your devices."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-purple-600" />,
      title: "Request Care",
      description: "Choose from our network of healthcare providers or AI-powered services."
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: "Receive Care",
      description: "Get immediate virtual care or schedule an in-home visit."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <AmbulanceAnimation />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How Rapha Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Getting started with Rapha is simple and straightforward
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="relative">
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-sm px-4 py-6 rounded-xl shadow-lg w-64"
                >
                  <div className="relative flex flex-col items-center group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="rounded-full border-2 border-purple-600 bg-white p-4 transition-colors duration-300 group-hover:bg-purple-50"
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 text-center">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}