import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import OurStory from '../components/about/OurStory';

export default function AboutUs() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About Rapha
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing healthcare through AI and biotechnology
            </p>
          </motion.div>
        </div>
      </section>

      <OurStory />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a future where healthcare is proactive, personalized, and accessible 24/7. 
                Through our AI-powered platform, we're making this vision a reality, one patient at a time.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-gray-600">
                Every day, we're helping thousands of patients receive better, faster care. Our platform 
                has revolutionized how healthcare is delivered, making it more efficient and accessible 
                than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}