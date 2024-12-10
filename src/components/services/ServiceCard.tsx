import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}