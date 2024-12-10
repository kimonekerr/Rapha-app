import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AITechnology from '../components/AITechnology';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AITechnology />
      <Testimonials />
      <CTASection />
    </>
  );
}