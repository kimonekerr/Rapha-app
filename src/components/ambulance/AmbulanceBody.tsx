import React from 'react';
import { motion } from 'framer-motion';

export default function AmbulanceBody() {
  return (
    <div className="relative w-full h-full">
      {/* Main Body */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-xl border-2 border-purple-600">
        {/* Front Window */}
        <div className="absolute right-2 top-2 w-8 h-4 bg-blue-200 rounded-sm" />
        
        {/* Side Windows */}
        <div className="absolute left-1/3 top-2 right-1/3 h-4 bg-blue-200 rounded-sm" />
        
        {/* Medical Cross */}
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
          <div className="relative w-6 h-6">
            <div className="absolute inset-2 bg-red-500 rounded-sm" />
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-2 bg-red-500 rounded-sm" />
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-2 bg-red-500 rounded-sm" />
          </div>
        </div>
        
        {/* Stripe */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600" />
      </div>

      {/* Wheels */}
      <div className="absolute bottom-0 left-4 w-4 h-4">
        <div className="absolute inset-0 bg-gray-800 rounded-full" />
        <div className="absolute inset-1 bg-gray-600 rounded-full animate-spin" />
      </div>
      <div className="absolute bottom-0 right-4 w-4 h-4">
        <div className="absolute inset-0 bg-gray-800 rounded-full" />
        <div className="absolute inset-1 bg-gray-600 rounded-full animate-spin" />
      </div>
    </div>
  );
}