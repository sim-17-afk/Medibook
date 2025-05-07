import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-600 to-teal-500 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Healthcare Made <span className="block text-cyan-200">Simple & Accessible</span>
            </h1>
            <p className="mt-6 text-xl max-w-3xl">
              Schedule appointments with top healthcare professionals in just a few clicks. No more waiting on hold or standing in line.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Find a Doctor
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-cyan-700 transition-colors"
              >
                Our Services
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-cyan-200 mr-2" />
                <span className="text-sm">Easy Scheduling</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-cyan-200 mr-2" />
                <span className="text-sm">24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-cyan-200 mr-2" />
                <span className="text-sm">Top Specialists</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 flex justify-center">
            <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Your Next Appointment</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="quick-specialty" className="block text-sm font-medium text-gray-700 mb-1">
                    Specialty
                  </label>
                  <select
                    id="quick-specialty"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a specialty</option>
                    <option value="general-medicine">General Medicine</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="orthopedics">Orthopedics</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quick-location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    id="quick-location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Select location</option>
                    <option value="downtown">Downtown Clinic</option>
                    <option value="north">North Medical Center</option>
                    <option value="west">West Health Plaza</option>
                    <option value="east">East Medical Building</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quick-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="quick-date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <Link
                  to="/doctors"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
                >
                  Find Available Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;