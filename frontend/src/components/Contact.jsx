import React from 'react';
import { contactInfo } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Kapcsolat</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lépjen kapcsolatba velünk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kérdése van? Szívesen segítünk! Vegye fel velünk a kapcsolatot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Information */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Címünk</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefonszám</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                  <p className="text-gray-600">{contactInfo.mobile}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 break-all">{contactInfo.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-red-600 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-3">Nyitvatartás</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{contactInfo.hours.monday.day}:</span>
                      <div className="text-right">
                        <div>{contactInfo.hours.monday.morning}</div>
                        <div>{contactInfo.hours.monday.afternoon}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{contactInfo.hours.tuesday.day}:</span>
                      <div className="text-right">
                        <div>{contactInfo.hours.tuesday.morning}</div>
                        <div>{contactInfo.hours.tuesday.afternoon}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{contactInfo.hours.wednesday.day}:</span>
                      <div className="text-right">
                        <div>{contactInfo.hours.wednesday.morning}</div>
                        <div>{contactInfo.hours.wednesday.afternoon}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{contactInfo.hours.thursday.day}:</span>
                      <div className="text-right">
                        <div>{contactInfo.hours.thursday.morning}</div>
                        <div>{contactInfo.hours.thursday.afternoon}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{contactInfo.hours.friday.day}:</span>
                      <div className="text-right">
                        <div>{contactInfo.hours.friday.morning}</div>
                        <div>{contactInfo.hours.friday.afternoon}</div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">{contactInfo.hours.saturday.day}:</span>
                      <span>{contactInfo.hours.saturday.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">{contactInfo.hours.sunday.day}:</span>
                      <span>{contactInfo.hours.sunday.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
