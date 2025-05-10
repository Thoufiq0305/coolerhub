
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cooler-300">Cooler Hub</h3>
            <p className="mb-4 text-gray-400">Professional home appliance repair and service solutions for all your needs. Trusted by households across Salem.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cooler-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cooler-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cooler-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cooler-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cooler-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cooler-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cooler-300 transition-colors">Services</Link>
              </li>
              {/* <li>
                <Link to="/sale" className="text-gray-400 hover:text-cooler-300 transition-colors">Sale</Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cooler-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cooler-300">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">AC Service & Repair</li>
              <li className="text-gray-400">Washing Machine Repair</li>
              <li className="text-gray-400">Refrigerator Service</li>
              <li className="text-gray-400">Water Purifier Maintenance</li>
              <li className="text-gray-400">Microwave Oven Repair</li>
              <li className="text-gray-400">Air Cooler Service</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cooler-300">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-cooler-300 flex-shrink-0" />
                <span className="text-gray-400">Azad Nagar, Junction, Salem - 636006</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-cooler-300 flex-shrink-0" />
                <span className="text-gray-400">123 456 6790</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-cooler-300 flex-shrink-0" />
                <span className="text-gray-400">info@coolerhub.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="mr-2 text-cooler-300 flex-shrink-0" />
                <span className="text-gray-400">Mon-Sat: 9AM - 7PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Cooler Hub Home Appliance Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
