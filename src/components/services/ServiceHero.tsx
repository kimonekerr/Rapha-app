import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ServiceHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12 lg:mb-0"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Professional Healthcare
              <br />
              <span className="text-purple-600">In Your Home</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience exceptional care with our comprehensive home healthcare services. 
              Our team of skilled professionals brings medical expertise directly to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                Find Care
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                alt="Home Healthcare"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>

            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              {[
                { icon: <Calendar />, label: "Easy Scheduling" },
                { icon: <MessageSquare />, label: "24/7 Support" },
                { icon: <ShieldCheck />, label: "Licensed Care" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-purple-600">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-900">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}