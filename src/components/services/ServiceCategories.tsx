import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Brain, Activity } from 'lucide-react';

export default function ServiceCategories() {
  const categories = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Care",
      description: "Daily assistance with personal care and activities"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Medical Care",
      description: "Professional medical services and monitoring"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Specialized Care",
      description: "Care for specific conditions and requirements"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Rehabilitation",
      description: "Physical therapy and recovery support"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}