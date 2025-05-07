import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative pb-2/3">
        <img 
          src={doctor.image} 
          alt={`Dr. ${doctor.name}`} 
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
            <p className="text-cyan-600">{doctor.specialty}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">{doctor.rating}</span>
          </div>
        </div>
        
        <p className="mt-3 text-sm text-gray-500 line-clamp-3">{doctor.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.expertise.map((item, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="mt-5 border-t border-gray-200 pt-4">
          <Link 
            to={`/booking/${doctor.id}`}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;