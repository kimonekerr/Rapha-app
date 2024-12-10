import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

export default function InsuranceSection() {
  const insuranceTypes = [
    "Medicare", "Medicaid", "Private Insurance",
    "Long-term Care Insurance", "Veterans Benefits"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-purple-600 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">Insurance Coverage</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We Work with Your Insurance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We accept most major insurance plans and will help you understand your coverage and benefits.
            </p>
            <ul className="space-y-4">
              {insuranceTypes.map((insurance, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{insurance}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Need Help Understanding Your Coverage?
              </h3>
              <p className="text-gray-600 mb-8">
                Our insurance specialists are here to help you navigate your benefits and coverage options.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                Verify Insurance Coverage
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}