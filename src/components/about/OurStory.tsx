import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
                alt="Healthcare Professional with Patient"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">10k+</div>
                  <div className="text-sm text-gray-600">Patients Helped</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 font-medium">Our Story</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Personal Mission to Transform Healthcare
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p className="mb-6 text-lg italic text-gray-700 border-l-4 border-purple-600 pl-4">
                "After giving birth to my son, I faced a medical crisis that exposed a broken healthcare system—waiting helplessly for urgent care that came too late."
              </p>

              <p className="mb-6">
                This personal ordeal ignited my mission to create Rapha, a platform designed to revolutionize how quickly and seamlessly patients receive care.
              </p>

              <p className="mb-8">
                Today, Rapha stands as a testament to our commitment to transforming healthcare delivery. We've built a platform that combines cutting-edge technology with compassionate care, ensuring that no one has to experience the same delays and frustrations I faced.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">To make quality healthcare accessible to everyone, everywhere.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Values</h3>
                    <p className="text-gray-600">Compassion, innovation, and patient-first care.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}