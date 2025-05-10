
import React from 'react';
import Hero from '@/components/ui/Hero';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  image: string;
  brand: string;
  description: string;
  features: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: 'Smart Air Conditioner',
    category: 'AC',
    price: 35000,
    salePrice: 29999,
    image: 'https://images.unsplash.com/photo-1605812840553-06c00d177201?auto=format&fit=crop&q=80&w=300',
    brand: 'LG',
    description: '1.5 Ton Inverter Split AC with energy-saving technology and smart connectivity.',
    features: [
      '1.5 Ton capacity',
      'Inverter technology',
      'Wi-Fi connectivity',
      'Voice control compatible',
      'Energy rating: 5 Star'
    ],
    isNew: true
  },
  {
    id: 2,
    name: 'Front Load Washing Machine',
    category: 'Washing Machine',
    price: 32000,
    salePrice: 27500,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=300',
    brand: 'Samsung',
    description: '8 kg Front Load Washing Machine with steam and multiple wash programs.',
    features: [
      '8 kg capacity',
      'Multiple wash programs',
      'Steam wash',
      'Inverter motor',
      'Energy rating: 4 Star'
    ],
    isBestSeller: true
  },
  {
    id: 3,
    name: 'Double Door Refrigerator',
    category: 'Refrigerator',
    price: 28000,
    salePrice: 24999,
    image: 'https://images.unsplash.com/photo-1584568694244-14e838eed4f2?auto=format&fit=crop&q=80&w=300',
    brand: 'Whirlpool',
    description: '300L Double Door Frost-Free Refrigerator with multi-airflow system.',
    features: [
      '300L capacity',
      'Frost-free',
      'Multi-airflow system',
      'Convertible freezer',
      'Energy rating: 3 Star'
    ]
  },
  {
    id: 4,
    name: 'RO Water Purifier',
    category: 'Water Purifier',
    price: 15000,
    salePrice: 12999,
    image: 'https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?auto=format&fit=crop&q=80&w=300',
    brand: 'Kent',
    description: 'Advanced RO+UV+UF water purifier with TDS controller and 8L storage capacity.',
    features: [
      'RO+UV+UF purification',
      'TDS controller',
      '8L storage tank',
      'Filter change indicator',
      'Digital display'
    ],
    isNew: true
  },
  {
    id: 5,
    name: 'Convection Microwave Oven',
    category: 'Microwave',
    price: 12000,
    salePrice: 9999,
    image: 'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?auto=format&fit=crop&q=80&w=300',
    brand: 'IFB',
    description: '25L Convection Microwave Oven with grill and auto-cook menus.',
    features: [
      '25L capacity',
      'Convection function',
      'Grill function',
      'Auto-cook menus',
      'Child lock safety'
    ]
  },
  {
    id: 6,
    name: 'Desert Air Cooler',
    category: 'Air Cooler',
    price: 8000,
    salePrice: 6499,
    image: 'https://images.unsplash.com/photo-1636373571258-4c8e9629fcc4?auto=format&fit=crop&q=80&w=300',
    brand: 'Symphony',
    description: 'High-performance desert air cooler with 50L water tank and honeycomb cooling pads.',
    features: [
      '50L water tank',
      'Honeycomb cooling pads',
      'Powerful air throw',
      'Low power consumption',
      'Castor wheels for mobility'
    ],
    isBestSeller: true
  }
];

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const discount = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100) 
    : 0;
    
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            {discount}% OFF
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            NEW
          </div>
        )}
        {product.isBestSeller && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            BEST SELLER
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-2">{product.name}</h3>
          <Badge variant="outline" className="bg-gray-100">
            {product.brand}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              {product.salePrice ? (
                <div className="flex items-center">
                  <span className="text-xl font-bold text-cooler-600">₹{product.salePrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">₹{product.price}</span>
                </div>
              ) : (
                <span className="text-xl font-bold text-cooler-600">₹{product.price}</span>
              )}
            </div>
            <Badge>{product.category}</Badge>
          </div>
        </div>
        
        <Button className="w-full bg-cooler-600 hover:bg-cooler-700">View Details</Button>
        
        <div className="mt-4 text-sm text-center text-gray-600">
          <span>Call for availability</span>
        </div>
      </div>
    </div>
  );
};

const Sale: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === 'All' 
    ? products
    : products.filter(p => p.category === activeCategory);
  
  return (
    <div>
      <Hero 
        title="Appliance Sale"
        subtitle="Explore our collection of high-quality home appliances at competitive prices."
        ctaText="Contact for Inquiries"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      />
      
      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="heading-lg mb-4">Available Appliances</h2>
            <p className="text-gray-600 text-lg">
              Browse our selection of quality appliances from top brands at competitive prices.
              All products come with manufacturer warranty and our installation service.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-cooler-600 hover:bg-cooler-700" 
                  : "hover:bg-cooler-50"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products available in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Brands We Carry</h2>
            <p className="text-gray-600 text-lg">We offer products from these trusted brands, known for quality and reliability.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['LG', 'Samsung', 'Whirlpool', 'Haier', 'Bosch', 'Daikin', 'Voltas', 'Blue Star', 'IFB', 'Godrej'].map((brand, index) => (
              <div key={index} className="text-xl font-bold text-gray-500">{brand}</div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-cooler-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Interested in Purchasing?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us for current availability, pricing details, and special offers. We also offer installation and maintenance services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cooler-600">
              <a href="tel:1234566790">
                <Phone className="mr-2 h-4 w-4" />
                Call: 123-456-6790
              </a>
            </Button>
            <Button asChild className="bg-white text-cooler-600 hover:bg-cooler-50">
              <a href="/contact">Send Inquiry</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Purchase Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Purchase Information</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cooler-100 text-cooler-600 flex items-center justify-center mr-3 mt-0.5">1</div>
                  <div>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">Availability:</strong> All listed products are subject to availability. Please contact us to confirm current stock.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cooler-100 text-cooler-600 flex items-center justify-center mr-3 mt-0.5">2</div>
                  <div>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">Payment:</strong> We accept cash, all major credit/debit cards, UPI, and bank transfers.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cooler-100 text-cooler-600 flex items-center justify-center mr-3 mt-0.5">3</div>
                  <div>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">Delivery:</strong> Free delivery within Salem city limits. Nominal charges apply for other areas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Additional Services</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cooler-100 text-cooler-600 flex items-center justify-center mr-3 mt-0.5">1</div>
                  <div>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">Installation:</strong> Professional installation service available for all appliances at competitive rates.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cooler-100 text-cooler-600 flex items-center justify-center mr-3 mt-0.5">2</div>
                  <div>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">Warranty:</strong> All products come with standard manufacturer warranty. Extended warranty options available.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cooler-100 text-cooler-600 flex items-center justify-center mr-3 mt-0.5">3</div>
                  <div>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">After-sales Service:</strong> We provide maintenance and repair services for all products we sell.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;
