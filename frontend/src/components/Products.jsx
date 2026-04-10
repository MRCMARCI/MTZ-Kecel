import React from 'react';
import { productCategories, featuredProducts } from '../mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Featured Products */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Kiemelt Termékek</h3>
            <p className="text-lg text-gray-600">Legnépszerűbb termékeink</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <ul className="space-y-1 mb-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-red-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-2xl font-bold text-red-600">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Érdeklődöm
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
