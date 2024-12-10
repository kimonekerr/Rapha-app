import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Complete health evaluation and care needs assessment"
    },
    {
      number: "02",
      title: "Care Planning",
      description: "Develop personalized care plan with healthcare team"
    },
    {
      number: "03",
      title: "Care Matching",
      description: "Match with qualified healthcare professionals"
    },
    {
      number: "04",
      title: "Begin Care",
      description: "Start receiving professional care at home"
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">Simple steps to start your care journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-purple-600 text-2xl"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}