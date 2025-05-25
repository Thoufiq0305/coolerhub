
import React from 'react';
import Hero from '@/components/ui/Hero';
import { Settings, Clock, Users, Home } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <Hero 
        title="About Cooler Hub"
        subtitle="Learn about our journey, our mission, and our commitment to excellence in home appliance services."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="/images/about.png"
      />
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Cooler Hub was founded in 2015 with a simple mission: to provide reliable, professional, and affordable appliance repair services to the residents of Salem.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation has now grown into a trusted service provider with a team of certified technicians serving hundreds of satisfied customers across the region.
              </p>
              <p className="text-gray-600">
                We understand the inconvenience caused by malfunctioning appliances, which is why we are committed to prompt service and effective solutions to get your appliances back in working order as quickly as possible.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about.png" 
                alt="Cooler Hub Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 text-lg">At the core of our business are the principles that guide our work and commitment to our customers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-cooler-600">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional home appliance repair services that exceed customer expectations through technical excellence, prompt response, and customer-focused solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-cooler-600">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted home appliance service provider in Salem, known for reliability, technical expertise, and outstanding customer service.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-cooler-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-cooler-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every repair job, ensuring quality workmanship and lasting solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-cooler-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-cooler-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Integrity</h4>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical business practices in all our interactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-cooler-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-cooler-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Reliability</h4>
              <p className="text-gray-600">
                We are committed to being there when our customers need us, with timely service and dependable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Expert Team</h2>
            <p className="text-gray-600 text-lg">Meet the skilled professionals who make Cooler Hub the trusted name in appliance repairs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                role: 'Founder & Lead Technician',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250',
                bio: '15+ years of experience in appliance repair and maintenance. Specialized in AC and refrigeration systems.'
              },
              {
                name: 'Vijay Kumar',
                role: 'Senior Technician',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250&h=250',
                bio: '10+ years of experience with expertise in washing machines and water purifier systems.'
              },
              {
                name: 'Ananya Singh',
                role: 'Customer Service Manager',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250&h=250',
                bio: 'Ensures our customers receive prompt attention and exceptional service for all their needs.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cooler-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Stats Section */}
      <section className="bg-cooler-600 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p>Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <p>Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p>Expert Technicians</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10000+</div>
              <p>Repairs Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
