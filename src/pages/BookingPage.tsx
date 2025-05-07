import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import { doctors } from '../data/doctors';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const [doctor, setDoctor] = useState(doctors.find(d => d.id === doctorId));
  
  useEffect(() => {
    if (doctor) {
      document.title = `Book Appointment with Dr. ${doctor.name} | MediBook`;
    }
  }, [doctor]);
  
  if (!doctor) {
    return <Navigate to="/doctors" />;
  }
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
          <p className="mt-2 text-gray-600">
            Select a date and time to schedule your appointment with Dr. {doctor.name}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AppointmentForm doctor={doctor} />
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={`Dr. ${doctor.name}`} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                  <p className="text-cyan-600">{doctor.specialty}</p>
                </div>
                
                <p className="mt-4 text-gray-600">{doctor.description}</p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{doctor.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{doctor.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{doctor.email}</span>
                  </div>
                </div>
                
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((item, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;