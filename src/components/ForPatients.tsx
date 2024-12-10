import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield, UserCheck, Activity, Home, Stethoscope, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import HealthcareDeliveryMap from './HealthcareDeliveryMap';

export default function ForPatients() {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI-Powered Diagnostics",
      description: "Advanced AI algorithms provide accurate preliminary health assessments."
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-600" />,
      title: "24/7 Monitoring",
      description: "Continuous health tracking and real-time alerts for peace of mind."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-purple-600" />,
      title: "Expert Care Team",
      description: "Connect with qualified healthcare professionals at your convenience."
    },
    {
      icon: <Home className="h-8 w-8 text-purple-600" />,
      title: "Home Healthcare",
      description: "Professional medical care delivered right to your doorstep."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: "Instant Access",
      description: "Get immediate medical attention whenever you need it"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Privacy First",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: <UserCheck className="h-12 w-12 text-purple-600" />,
      title: "Personalized Care",
      description: "Treatment plans tailored to your unique health needs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
                <Heart className="h-5 w-5 text-purple-600" />
                <span className="text-purple-600 font-medium">Patient-Centered Care</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                Healthcare That
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Comes to You
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl">
                Experience the future of healthcare with our AI-powered home care services. 
                Professional medical attention whenever you need it, wherever you are.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <HealthcareDeliveryMap />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900">
              Comprehensive Healthcare Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-600">
              Everything you need for better health, all in one place
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Rapha for
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Your Healthcare Needs
                </span>
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="mt-2 text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white">
              Ready to Transform Your Healthcare Experience?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-purple-100">
              Join thousands of patients who have already discovered the future of healthcare with Rapha
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Get Started Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}