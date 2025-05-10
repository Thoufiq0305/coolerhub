
import React from 'react';
import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { AirVent, WashingMachine, Refrigerator, Settings, Microwave, Cloud, Phone } from 'lucide-react';
import Shield from '@/components/ui/Shield';
import Clock from '@/components/ui/Clock';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: AirVent,
    title: 'AC Service & Repair',
    description: 'Professional AC repair, installation, and maintenance services to keep you cool and comfortable.'
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description: 'Expert washing machine repair and maintenance for all brands and models.'
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator Service',
    description: 'Complete refrigerator repair and maintenance services to keep your food fresh and appliance running efficiently.'
  },
  {
    icon: Settings,
    title: 'Water Purifier Service',
    description: 'RO water purifier installation, repair, and maintenance for clean and safe drinking water.'
  },
  {
    icon: Microwave,
    title: 'Microwave Oven Repair',
    description: 'Expert microwave oven repair services to fix all issues and restore functionality.'
  },
  {
    icon: Cloud,
    title: 'Air Cooler Service',
    description: 'Complete air cooler repair and maintenance services to ensure optimal cooling performance.'
  }
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    testimonial: 'Amazing service! The technician was prompt, professional and fixed my AC in no time. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Priya Sharma',
    role: 'Local Business Owner',
    testimonial: 'Cooler Hub has been maintaining all our office appliances for the past year. Reliable, efficient and affordable service!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Arjun Patel',
    role: 'Homeowner',
    testimonial: 'I was impressed with how quickly they diagnosed and fixed my refrigerator issue. Great value for money!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

const Index: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Expert Home Appliance Repair & Services"
        subtitle="Professional, reliable, and affordable home appliance repair services in Salem. One call solution for all your appliance needs."
        ctaText="Book a Service Now"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
      />
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Why Choose Cooler Hub?</h2>
            <p className="text-gray-600 text-lg">We are committed to providing the highest quality repair services with transparent pricing and exceptional customer service.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-cooler-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-cooler-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Technicians</h3>
              <p className="text-gray-600">Our certified technicians have years of experience servicing all major appliance brands.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-cooler-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-cooler-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
              <p className="text-gray-600">We offer prompt, same-day service to quickly resolve your appliance issues.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-cooler-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-cooler-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Warranty</h3>
              <p className="text-gray-600">All our repairs come with a service warranty for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">We provide comprehensive repair and maintenance services for all types of home appliances.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="bg-cooler-600 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Urgent Appliance Repair?</h2>
              <p className="text-cooler-100">Our technicians are ready to help. Call us now!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cooler-600">
                <a href="tel:1234566790">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: 123-456-6790
                </a>
              </Button>
              <Button asChild className="bg-white text-cooler-600 hover:bg-cooler-50">
                <Link to="/contact">Book a Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">We take pride in our work and our customer satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Brands We Service</h2>
            <p className="text-gray-600 text-lg">We have expertise in repairing and servicing all major appliance brands.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['LG', 'Samsung', 'Whirlpool', 'Haier', 'Bosch', 'Daikin', 'Voltas', 'Blue Star'].map((brand, index) => (
              <div key={index} className="text-xl font-bold text-gray-500">{brand}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
