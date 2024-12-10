import React from 'react';
import { Stethoscope, Brain, Clock, Shield, Smartphone, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Diagnostics",
      description: "Advanced AI algorithms provide accurate preliminary health assessments and personalized care recommendations."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "Mobile Health Monitoring",
      description: "Track vital signs and health metrics in real-time through our innovative biotechnology devices."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "24/7 Care Access",
      description: "On-demand healthcare services available around the clock, just like your favorite delivery app."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-purple-600" />,
      title: "Expert Healthcare Network",
      description: "Connect with qualified healthcare professionals for virtual or in-person consultations."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Secure Health Data",
      description: "Your health information is protected with enterprise-grade security and encryption."
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "Personalized Care Plans",
      description: "AI-driven healthcare plans tailored to your unique health needs and goals."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Revolutionary Healthcare Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience healthcare reimagined through our innovative AI-powered platform
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}