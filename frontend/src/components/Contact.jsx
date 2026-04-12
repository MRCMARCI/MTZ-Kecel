import React from 'react';
import { contactInfo } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Kapcsolat</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lépjen kapcsolatba velünk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kérdése van? Szívesen segítünk! Látogasson el hozzánk vagy hívjon bizalommal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Address Card - Larger */}
          <Card className="lg:col-span-1 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Címünk</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {contactInfo.address}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 w-full">
                  <p className="text-sm text-gray-500">Könnyen megközelíthető</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details - Phone & Email */}
          <Card className="lg:col-span-1 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Telefonszám</h3>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="block text-base text-gray-700 hover:text-red-600 transition-colors mb-1"
                    >
                      {contactInfo.phone}
                    </a>
                    <a 
                      href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`}
                      className="block text-base text-gray-700 hover:text-red-600 transition-colors"
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email cím</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-base text-gray-700 hover:text-red-600 transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours - Larger */}
          <Card className="lg:col-span-1 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-red-600 to-red-700 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Nyitvatartás</h3>
                <div className="space-y-3 flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold">{contactInfo.hours.monday.day} - {contactInfo.hours.friday.day}</span>
                    </div>
                    <div className="text-sm space-y-0.5">
                      <div className="flex justify-between">
                        <span className="text-white/80">Reggel:</span>
                        <span className="font-medium">{contactInfo.hours.monday.morning}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Délután:</span>
                        <span className="font-medium">{contactInfo.hours.monday.afternoon}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{contactInfo.hours.saturday.day}</span>
                      <span className="font-medium">{contactInfo.hours.saturday.time}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{contactInfo.hours.sunday.day}</span>
                      <span className="font-medium text-red-200">{contactInfo.hours.sunday.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Várjuk szeretettel!</h3>
          <p className="text-lg text-red-100">
            Személyesen is meglátogathat minket üzletünkben, ahol szakértő kollégáink állnak rendelkezésére.
          </p>
        </div>
      </div>
    </section>
  );
};
