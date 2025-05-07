import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, Home, Users, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Calendar className="h-8 w-8 text-cyan-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MediBook</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link to="/doctors" className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Users className="h-4 w-4 mr-1" />
              Doctors
            </Link>
            <Link to="/appointments" className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Calendar className="h-4 w-4 mr-1" />
              My Appointments
            </Link>
            <Link to="/#contact" className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Phone className="h-4 w-4 mr-1" />
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-5 w-5 mr-2" />
            Home
          </Link>
          <Link
            to="/doctors"
            className="flex items-center text-gray-600 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <Users className="h-5 w-5 mr-2" />
            Doctors
          </Link>
          <Link
            to="/appointments"
            className="flex items-center text-gray-600 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <Calendar className="h-5 w-5 mr-2" />
            My Appointments
          </Link>
          <Link
            to="/#contact"
            className="flex items-center text-gray-600 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="h-5 w-5 mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;