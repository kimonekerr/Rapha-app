import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative bg-purple-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-purple-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to transform</span>
                <span className="block">your healthcare experience?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-purple-200">
                Experience personalized healthcare in the comfort of your home. Our dedicated team of professionals is ready to provide the care you and your family deserve.
              </p>
              <a
                href="#find-care"
                className="mt-8 bg-white border border-transparent rounded-full px-8 py-3 inline-flex items-center text-base font-medium text-purple-600 hover:bg-purple-50"
              >
                Find Care Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-center sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
              alt="Caring nurse visiting patient at home"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-transparent rounded-md" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">Professional Home Care</h3>
                  <p className="text-sm text-gray-600">Experienced healthcare providers at your service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}