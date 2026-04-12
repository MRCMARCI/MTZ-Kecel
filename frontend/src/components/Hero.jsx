import React from 'react';
import { ArrowRight, Shield, Package, Clock } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Add visual feedback
      element.style.transition = 'transform 0.3s ease-out';
      element.style.transform = 'scale(1.01)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 300);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Add visual feedback
      element.style.transition = 'transform 0.3s ease-out';
      element.style.transform = 'scale(1.01)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 300);
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505582866941-6788e0205dd2?w=1600"
          alt="Szerszámok"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              20+ év tapasztalat
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professzionális Szerszámok és Alkatrészek Kecelen
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Munkaruházattól az ipari alkatrészekig – minden egy helyen, raktárról azonnal!
            Portwest hivatalos forgalmazó. Kiváló minőség, versenyképes árak, szakértő tanácsadás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
            >
              Termékek böngészése
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
            >
              Kapcsolatfelvétel
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Ellenőrzött minőség</h3>
                <p className="text-gray-300 text-sm">Csak prémium márkák</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Széles választék</h3>
                <p className="text-gray-300 text-sm">100+ termék raktáron</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Azonnali kiszolgálás</h3>
                <p className="text-gray-300 text-sm">Raktárról, azonnal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
