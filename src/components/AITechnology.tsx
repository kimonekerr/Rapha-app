import React from 'react';
import { Brain, Cpu, Network, LineChart, Phone, Clock, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

function MobilePhone() {
  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <div className="relative rounded-[3rem] border-8 border-gray-900 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl" />
        
        {/* Mobile Screen Content */}
        <div className="bg-gradient-to-b from-purple-100 to-white aspect-[9/19.5] p-6 space-y-4">
          {/* Status Bar */}
          <div className="flex justify-between text-xs text-gray-600">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4"><Signal /></div>
              <div className="w-4 h-4"><Wifi /></div>
              <div className="w-6 h-4"><Battery /></div>
            </div>
          </div>

          {/* App Content */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-purple-600">Find Care Now</h3>
              <p className="text-sm text-gray-600">Healthcare at your fingertips</p>
            </div>

            {/* Service Cards */}
            <div className="space-y-3">
              <ServiceCard
                icon={<Heart className="h-5 w-5 text-purple-600" />}
                title="Request Care"
                status="Available Now"
              />
              <ServiceCard
                icon={<Clock className="h-5 w-5 text-blue-600" />}
                title="Schedule Visit"
                status="Book Appointment"
              />
              <ServiceCard
                icon={<Shield className="h-5 w-5 text-green-600" />}
                title="AI Diagnosis"
                status="Instant Analysis"
              />
            </div>

            {/* Live Provider Status */}
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Dr. Sarah Johnson</h4>
                  <p className="text-xs text-gray-500">Available in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl opacity-50 animate-pulse" />
    </div>
  );
}

function ServiceCard({ icon, title, status }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-50 rounded-lg">
            {icon}
          </div>
          <div>
            <h4 className="text-sm font-medium">{title}</h4>
            <p className="text-xs text-gray-500">{status}</p>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer"
        >
          <Phone className="h-4 w-4 text-purple-600" />
        </motion.div>
      </div>
    </div>
  );
}

function Signal() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="1" y="14" width="4" height="6" />
      <rect x="7" y="10" width="4" height="10" />
      <rect x="13" y="6" width="4" height="14" />
      <rect x="19" y="2" width="4" height="18" />
    </svg>
  );
}

function Wifi() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 20l-8-8c2.2-2.2 5.2-3.5 8-3.5s5.8 1.3 8 3.5l-8 8z" />
      <path d="M12 16l-4-4c1.1-1.1 2.6-1.8 4-1.8s2.9 0.7 4 1.8l-4 4z" />
      <path d="M12 12l-2-2c0.5-0.5 1.2-0.8 2-0.8s1.5 0.3 2 0.8l-2 2z" />
    </svg>
  );
}

function Battery() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="6" width="18" height="12" rx="2" />
      <rect x="20" y="10" width="2" height="4" />
      <rect x="4" y="8" width="14" height="8" fill="currentColor" />
    </svg>
  );
}

export default function AITechnology() {
  return (
    <section id="ai-technology" className="py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <MobilePhone />
          </div>

          <div className="mt-12 lg:mt-0 order-1 lg:order-2">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span className="text-purple-600 font-medium">AI Technology</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Advanced Healthcare
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  Powered by AI
                </span>
              </h2>

              <p className="text-xl text-gray-600">
                Experience seamless healthcare delivery with our AI-powered mobile platform.
                Connect with healthcare providers instantly and receive care at your doorstep.
              </p>

              <div className="grid gap-8">
                {[
                  {
                    icon: <Brain className="h-6 w-6 text-purple-600" />,
                    title: "Smart Matching",
                    description: "AI matches you with the perfect healthcare provider"
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-purple-600" />,
                    title: "Real-time Tracking",
                    description: "Monitor your provider's location in real-time"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-purple-600" />,
                    title: "Secure Platform",
                    description: "End-to-end encrypted health data protection"
                  },
                  {
                    icon: <Heart className="h-6 w-6 text-purple-600" />,
                    title: "Instant Care",
                    description: "Get immediate medical attention when needed"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/80 transition-colors">
                    <div className="flex-shrink-0 p-3 bg-purple-100 rounded-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}