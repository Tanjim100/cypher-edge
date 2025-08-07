"use client";


import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductSection = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'CypherBot (Basic Kit)',
      description: 'An entry-level robotics kit perfect for beginners. Includes all essential components.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070',
      price: 129.99
    },
    {
      id: 2,
      name: 'Micro:Robot Kit (Intermediate)',
      description: 'A versatile robotics kit compatible with micro:bit. Perfect for coding and electronics projects.',
      image: 'https://i.ibb.co/KcrbhY4G/arduino2.webp',
      price: 259.99
    },
    {
      id: 3,
      name: 'Cypher Wheel EV (Advanced)',
      description: 'Advanced robotics platform for creating sophisticated autonomous vehicles and robots.',
      image: 'https://i.ibb.co/KcrbhY4G/arduino2.webp',
      price: 379.99
    }
  ]);

  return (
    <section id="products" className="py-20 bg-[#ddf4ff] rounded-t-[200px] border border-[#1fcfff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">Our Products</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-gray-700 px-4">
            Explore our range of robotics kits and components designed for learners of all levels,
            from beginners to advanced enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cypher-900">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between ">
                  <span className="text-lg font-bold text-cypher-800">${product.price}</span>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      Learn More
                    </Button>
                    <Button>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:outline ">
            View More Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
