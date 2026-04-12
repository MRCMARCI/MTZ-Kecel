import React from 'react';
import { companyInfo } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const iconMap = {
  'Minőség': Award,
  'Megbízhatóság': Target,
  'Szakértelem': Users,
  'Ár-érték arány': TrendingUp
};

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Rólunk</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {companyInfo.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Küldetésünk</h3>
              <p className="text-gray-700">{companyInfo.mission}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Év a piacon</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Termék raktáron</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-1">5000+</div>
                <div className="text-sm text-gray-600">Elégedett ügyfél</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyInfo.values.map((value, index) => {
                const IconComponent = iconMap[value.title] || Award;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gray-50"
                  >
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Partner Logo */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-3">Hivatalos Portwest Partner</p>
              <div className="text-3xl font-bold text-gray-900">
                PORTWEST
              </div>
              <p className="text-sm text-gray-500 mt-2">és további vezető márkák képviseletében</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
