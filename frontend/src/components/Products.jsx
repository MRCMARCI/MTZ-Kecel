import React from 'react';
import { productCategories } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle } from 'lucide-react';

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Termékeink</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Széles Termékválaszték
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Munkaruházattól az ipari alkatrészekig - minden egy helyen
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-3">{category.description}</p>
                <ul className="space-y-1">
                  {category.items.slice(0, 3).map((item, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center">
                      <CheckCircle className="w-3 h-3 text-red-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
