import React from 'react';
import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import { AirVent, WashingMachine, Refrigerator, Settings, Microwave, Cloud, Heater } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const allServices = [
  {
    icon: AirVent,
    title: 'AC Service & Repair',
    description: 'Professional AC repair, installation, and maintenance services to keep you cool and comfortable. We service all major brands including LG, Samsung, Daikin, Voltas, and more.',
    features: [
      'AC installation and uninstallation',
      'Regular AC maintenance and cleaning',
      'Refrigerant recharging',
      'Compressor repair and replacement',
      'Electrical and control system repairs'
    ]
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description: 'Expert washing machine repair and maintenance for all brands and models. From front-loading to top-loading machines, we fix them all.',
    features: [
      'Water pump repair and replacement',
      'Motor and transmission repairs',
      'Control board diagnostics and repair',
      'Door seal/gasket replacement',
      'Drum and bearing replacement'
    ]
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator Service',
    description: 'Complete refrigerator repair and maintenance services to keep your food fresh and appliance running efficiently.',
    features: [
      'Cooling system repairs',
      'Compressor diagnosis and replacement',
      'Thermostat repairs',
      'Ice maker repairs',
      'Door seal replacement'
    ]
  },
  {
    icon: Settings,
    title: 'Water Purifier Service',
    description: 'RO water purifier installation, repair, and maintenance for clean and safe drinking water.',
    features: [
      'Filter replacement',
      'UV lamp replacement',
      'RO membrane cleaning and replacement',
      'Pre-filter and post-filter servicing',
      'TDS controller adjustment'
    ]
  },
  {
    icon: Microwave,
    title: 'Microwave Oven Repair',
    description: 'Expert microwave oven repair services to fix all issues and restore functionality.',
    features: [
      'Magnetron replacement',
      'Door switch repair',
      'Control panel repair',
      'Turntable motor replacement',
      'Thermal fuse replacement'
    ]
  },
  {
    icon: Cloud,
    title: 'Air Cooler Service',
    description: 'Complete air cooler repair and maintenance services to ensure optimal cooling performance.',
    features: [
      'Pump repair and replacement',
      'Motor repairs',
      'Cooling pad replacement',
      'Fan blade balancing and repair',
      'Water tank cleaning'
    ]
  },
  {
    icon: Heater,
    title: 'Heater Repair',
    description: 'Professional repair and maintenance services for all types of water heaters and room heaters.',
    features: [
      'Heating element replacement',
      'Thermostat repair and calibration',
      'Leakage repair',
      'Safety valve replacement',
      'Wiring and control system repairs'
    ]
  },
  {
    icon: Settings,
    title: 'Other Home Appliances',
    description: 'We repair and service all other home appliances to ensure your home runs smoothly.',
    features: [
      'Mixer and grinder repairs',
      'Dishwasher repairs',
      'Chimney and exhaust fan servicing',
      'Electric iron repairs',
      'Kitchen appliance repairs'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Our Services"
        subtitle="Professional home appliance repair and maintenance services for all your needs."
        ctaText="Book a Service"
        ctaLink="/contact"
        backgroundImage="/images/about.png"
      />
      
      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Service Offerings</h2>
            <p className="text-gray-600 text-lg">We provide comprehensive repair and maintenance services for all types of home appliances.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.slice(0, 6).map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Detailed Service Information</h2>
            <p className="text-gray-600 text-lg">Learn more about our specialized services and how we can help you.</p>
          </div>
          
          <div className="space-y-12">
            {allServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-4 bg-cooler-50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <service.icon className="h-16 w-16 text-cooler-600 mx-auto mb-4" />
                      <h3 className="heading-md">{service.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-8 p-8">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <h4 className="font-bold mb-2">Our Services Include:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button asChild className="btn-primary">
                        <Link to="/contact">Request Service</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Service Process</h2>
            <p className="text-gray-600 text-lg">We follow a streamlined process to ensure efficient and effective service delivery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Contact Us',
                description: 'Reach out via phone or contact form with details of your appliance issue.'
              },
              {
                step: '02',
                title: 'Diagnosis',
                description: 'Our technician will diagnose the problem and provide a transparent quote.'
              },
              {
                step: '03',
                title: 'Repair Service',
                description: 'We complete the repair with quality parts and professional workmanship.'
              },
              {
                step: '04',
                title: 'Quality Check',
                description: 'We ensure your appliance is working perfectly before completing the service.'
              }
            ].map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cooler-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Common questions about our services and processes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How quickly can you respond to service requests?',
                a: 'We typically respond to service requests within 4-24 hours, depending on the urgency and our current schedule. Emergency services are available with priority response.'
              },
              {
                q: 'Do you provide warranty for your repairs?',
                a: 'Yes, we provide a service warranty for all our repairs. The warranty period varies depending on the type of repair, but typically ranges from 30 days to 3 months.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, all major credit/debit cards, UPI, and bank transfers. Payment is typically collected after the service is completed to your satisfaction.'
              },
              {
                q: 'Do you charge for diagnostic visits?',
                a: 'A nominal diagnostic fee is charged for the initial visit, which is waived if you proceed with our repair services. The exact fee will be communicated when you schedule the service.'
              },
              {
                q: 'Do you provide genuine spare parts?',
                a: 'Yes, we use genuine or high-quality compatible spare parts for all our repairs. We can provide options based on availability and your preference.'
              },
              {
                q: 'How can I schedule a service appointment?',
                a: 'You can schedule a service appointment by calling our service number, filling out the contact form on our website, or visiting our office during business hours.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-cooler-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Get Your Appliances Fixed?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Our team of expert technicians is ready to help you with all your appliance repair and maintenance needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cooler-600">
              <a href="tel:9092565056">Call: 9092565056</a>
            </Button>
            <Button asChild className="bg-white text-cooler-600 hover:bg-cooler-50">
              <Link to="/contact">Book a Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
