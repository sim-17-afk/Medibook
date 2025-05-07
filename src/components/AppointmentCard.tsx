import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Appointment } from '../types';
import { formatDate, formatTime } from '../utils/dateUtils';

interface AppointmentCardProps {
  appointment: Appointment;
  onCancel: (id: string) => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onCancel }) => {
  const isUpcoming = new Date(appointment.date) > new Date();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-cyan-500">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Dr. {appointment.doctorName}</h3>
            <p className="text-cyan-600">{appointment.specialty}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            isUpcoming ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Past'}
          </div>
        </div>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span>{formatDate(appointment.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />
            <span>{formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}</span>
          </div>
          
          <div className="flex items-start text-gray-700">
            <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <span>{appointment.location}</span>
          </div>
        </div>
        
        <div className="mt-5 border-t border-gray-200 pt-4">
          {isUpcoming && (
            <button 
              onClick={() => onCancel(appointment.id)}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-md hover:bg-red-50 transition-colors"
            >
              Cancel Appointment
            </button>
          )}
          
          {!isUpcoming && (
            <button 
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-cyan-600 bg-white border border-cyan-600 rounded-md hover:bg-cyan-50 transition-colors"
            >
              Book Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;