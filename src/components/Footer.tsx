import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-cyan-400" />
              <span className="ml-2 text-xl font-bold">MediBook</span>
            </div>
            <p className="text-gray-300 text-sm">
              Making healthcare accessible with easy online booking for all your medical needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/doctors" className="hover:text-cyan-400 transition-colors">Find a Doctor</a></li>
              <li><a href="/appointments" className="hover:text-cyan-400 transition-colors">My Appointments</a></li>
              <li><a href="/#services" className="hover:text-cyan-400 transition-colors">Our Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                <span>contact@medibook.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                <span>123 Medical Center Dr.<br />Healthcare City, MED 12345</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p>8:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">Saturday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p>Closed (Emergency Only)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MediBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;