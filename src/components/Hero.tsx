import React, { useState } from 'react';
import { Bot, Activity, Apple, PlayCircle, Mail, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import VideoModal from './VideoModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [patientEmail, setPatientEmail] = useState('');
  const [providerEmail, setProviderEmail] = useState('');
  const [activeWaitlist, setActiveWaitlist] = useState<'patient' | 'provider'>('patient');

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle patient waitlist submission
    console.log('Patient email:', patientEmail);
    setPatientEmail('');
  };

  const handleProviderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle provider waitlist submission
    console.log('Provider email:', providerEmail);
    setProviderEmail('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-white pt-16">
      <AnimatedBackground />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
              <Bot className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 font-medium">AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Healthcare
              </span>
              <br />
              <span className="text-gray-900">at Your Doorstep</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Experience the future of healthcare with our AI-driven platform. 
              Get instant access to medical professionals and personalized care.
            </p>

            {/* Waitlist Toggle */}
            <div className="flex p-1 space-x-1 bg-purple-100 rounded-full max-w-md">
              <button
                onClick={() => setActiveWaitlist('patient')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  activeWaitlist === 'patient'
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-600 hover:bg-purple-200'
                }`}
              >
                For Patients
              </button>
              <button
                onClick={() => setActiveWaitlist('provider')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  activeWaitlist === 'provider'
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-600 hover:bg-purple-200'
                }`}
              >
                For Providers
              </button>
            </div>

            {/* Waitlist Forms */}
            <div className="space-y-6 max-w-md">
              {activeWaitlist === 'patient' ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handlePatientSubmit}
                  className="space-y-4"
                >
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
                  >
                    Join Patient Waitlist
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleProviderSubmit}
                  className="space-y-4"
                >
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={providerEmail}
                      onChange={(e) => setProviderEmail(e.target.value)}
                      placeholder="Enter your professional email"
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
                  >
                    Join Provider Waitlist
                  </button>
                </motion.form>
              )}
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 mb-4">Download our mobile app</p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <PlayCircle className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-600">Care Access</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">98%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">10k+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2070"
                alt="Family Healthcare at Home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Activity className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Care</h4>
                      <p className="text-sm text-gray-600">Professional healthcare in your home</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}