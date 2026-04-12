import React from 'react';
import { Wrench, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../mockData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MTZ-Kecel</h3>
                <p className="text-sm text-gray-400">Szerszám és Alkatrész</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Több mint 20 éve szolgáljuk ki ügyfeleinket minőségi szerszámokkal,
              munkaruházattal és alkatrészekkel. Megbízható partner minden munkához.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Gyors linkek</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-red-500 transition-colors"
                >
                  Főoldal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-red-500 transition-colors"
                >
                  Termékek
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-red-500 transition-colors"
                >
                  Rólunk
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-red-500 transition-colors"
                >
                  Kapcsolat
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Elérhetőség</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">{contactInfo.phone}</p>
                  <p className="text-sm">{contactInfo.mobile}</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{contactInfo.email}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} MTZ-Kecel. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};
