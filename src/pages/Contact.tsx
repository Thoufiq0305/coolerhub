
import React from 'react';
import Hero from '@/components/ui/Hero';
import ContactForm from '@/components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our team for repairs, services, or inquiries."
        ctaText="Call Us Now"
        ctaLink="tel:9092565056"
        backgroundImage="/images/contact.png"
      />
      
      {/* Contact Info & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-lg mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need to schedule a repair? Contact us through any of the following methods or fill out the form, and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cooler-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-cooler-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">Azad Nagar, Junction, Salem - 636006</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cooler-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-cooler-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:9092565056" className="hover:text-cooler-600 transition-colors">
                        9092565056
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cooler-50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-cooler-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:coolerhub12@gmail.com" className="hover:text-cooler-600 transition-colors">
                        coolerhub12@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cooler-50 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-cooler-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed (Emergency services available)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-cooler-50 p-3 rounded-full text-cooler-600 hover:bg-cooler-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-cooler-50 p-3 rounded-full text-cooler-600 hover:bg-cooler-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-cooler-50 p-3 rounded-full text-cooler-600 hover:bg-cooler-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-cooler-50 p-3 rounded-full text-cooler-600 hover:bg-cooler-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Location</h2>
            <p className="text-gray-600 text-lg">Visit our office at Azad Nagar, Junction, Salem - 636006</p>
          </div>
          
          <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62545.72407269124!2d78.09947247021776!3d11.65120069949621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068c45!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705212259397!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cooler Hub Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Emergency Service */}
      <section className="bg-cooler-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Emergency Service Available</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Having an urgent appliance issue? Our emergency service team is available to help.
          </p>
          <a
            href="tel:9092565056"
            className="bg-white text-cooler-600 hover:bg-cooler-50 py-3 px-8 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Service: 9092565056
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
