import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navigation = {
    solutions: [
      { name: 'For Patients', href: '/for-patients' },
      { name: 'AI Diagnostics', href: '#' },
      { name: 'Remote Monitoring', href: '#' },
      { name: 'Virtual Consultations', href: '#' },
      { name: 'Home Care', href: '#' },
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'HIPAA', href: '#' },
      { name: 'Licensing', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Rapha</span>
            </div>
            <p className="text-gray-400 text-base">
              Revolutionizing healthcare through AI and biotechnology, making quality care accessible to everyone.
            </p>
            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="text-gray-400 hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('/') ? (
                        <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      ) : (
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="h-5 w-5" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-5 w-5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Rapha Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}