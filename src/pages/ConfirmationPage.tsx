import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import { formatDate, formatTime } from '../utils/dateUtils';
import { CheckCircle, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const ConfirmationPage: React.FC = () => {
  const { latestAppointment } = useAppointment();
  
  useEffect(() => {
    document.title = 'Appointment Confirmation | MediBook';
  }, []);
  
  if (!latestAppointment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <Calendar className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="mt-3 text-lg font-medium text-gray-900">No appointment found</h2>
            <p className="mt-2 text-sm text-gray-500">
              You haven't booked any appointment yet or your session expired.
            </p>
            <div className="mt-6">
              <Link
                to="/doctors"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-teal-500 px-6 py-8 text-white text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-white">
              <CheckCircle className="h-10 w-10 text-cyan-600" />
            </div>
            <h1 className="text-2xl font-bold mt-4">Appointment Confirmed!</h1>
            <p className="mt-2 text-cyan-100">
              Your appointment has been successfully scheduled.
            </p>
          </div>
          
          <div className="p-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
                  <p className="mt-1 text-lg text-gray-900">Dr. {latestAppointment.doctorName}</p>
                  <p className="text-cyan-600">{latestAppointment.specialty}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <span className="text-gray-900 font-medium">{formatDate(latestAppointment.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <span className="text-gray-900">{formatTime(latestAppointment.startTime)} - {formatTime(latestAppointment.endTime)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <span className="text-gray-900">{latestAppointment.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200 py-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p className="mt-1 text-gray-900">{latestAppointment.patientName}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Contact</h3>
                  <p className="mt-1 text-gray-900">{latestAppointment.patientEmail}</p>
                  <p className="text-gray-900">{latestAppointment.patientPhone}</p>
                </div>
              </div>
              
              {latestAppointment.reason && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Reason for Visit</h3>
                  <p className="mt-1 text-gray-900">{latestAppointment.reason}</p>
                </div>
              )}
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/appointments"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                View All Appointments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                to="/"
                className="flex items-center justify-center px-4 py-2 border border-cyan-600 rounded-md shadow-sm text-sm font-medium text-cyan-600 bg-white hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;