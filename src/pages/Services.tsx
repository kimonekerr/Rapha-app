import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Heart, Brain, Activity, 
  Pill, Clipboard, UserCog, Bath, 
  UtensilsCrossed, Clock, Bed, 
  Calendar, MessageSquare, ShieldCheck, Users,
  AccessibilityIcon // Replace Wheelchair with AccessibilityIcon
} from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import ServiceHero from '../components/services/ServiceHero';
import ServiceCategories from '../components/services/ServiceCategories';
import ServiceProcess from '../components/services/ServiceProcess';
import InsuranceSection from '../components/services/InsuranceSection';

export default function Services() {
  const services = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Skilled Nursing",
      description: "Professional nursing care including wound care, medication management, and health monitoring."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Cardiac Care",
      description: "Specialized care for patients recovering from heart conditions or surgery."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neurological Care",
      description: "Support for patients with neurological conditions including stroke recovery."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Physical Therapy",
      description: "Rehabilitation services to improve mobility, strength, and independence."
    },
    {
      icon: <Bath className="h-6 w-6" />,
      title: "Personal Care",
      description: "Assistance with daily activities like bathing, dressing, and grooming."
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6" />,
      title: "Meal Preparation",
      description: "Nutritious meal planning and preparation following dietary requirements."
    },
    {
      icon: <Pill className="h-6 w-6" />,
      title: "Medication Management",
      description: "Ensuring proper medication administration and compliance."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Care",
      description: "Round-the-clock care and monitoring for patients requiring continuous support."
    },
    {
      icon: <Bed className="h-6 w-6" />,
      title: "Post-Hospital Care",
      description: "Transitional care to support recovery after hospital discharge."
    },
    {
      icon: <AccessibilityIcon className="h-6 w-6" />, // Updated icon
      title: "Mobility Assistance",
      description: "Support with safe movement and transfer assistance."
    },
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: "Care Planning",
      description: "Personalized care plans developed by healthcare professionals."
    },
    {
      icon: <UserCog className="h-6 w-6" />,
      title: "Caregiver Training",
      description: "Education and support for family caregivers."
    }
  ];

  return (
    <div className="pt-16">
      <ServiceHero />
      
      <ServiceCategories />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Comprehensive Home Healthcare Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional medical care in the comfort of your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess />
      
      <InsuranceSection />

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-colors"
            >
              Find Care Now
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}