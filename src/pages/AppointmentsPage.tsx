import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import AppointmentCard from '../components/AppointmentCard';
import { Calendar, Plus } from 'lucide-react';

const AppointmentsPage: React.FC = () => {
  const { appointments, cancelAppointment } = useAppointment();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState<string | null>(null);
  
  const upcomingAppointments = appointments.filter(
    app => new Date(app.date) > new Date()
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const pastAppointments = appointments.filter(
    app => new Date(app.date) <= new Date()
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const handleCancelClick = (id: string) => {
    setAppointmentToCancel(id);
    setShowConfirmation(true);
  };
  
  const confirmCancellation = () => {
    if (appointmentToCancel) {
      cancelAppointment(appointmentToCancel);
      setShowConfirmation(false);
      setAppointmentToCancel(null);
    }
  };
  
  useEffect(() => {
    document.title = 'My Appointments | MediBook';
  }, []);
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
            <p className="mt-2 text-gray-600">
              Manage your scheduled appointments and booking history.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              to="/doctors"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Book New Appointment
            </Link>
          </div>
        </div>
        
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h2>
            
            {upcomingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onCancel={handleCancelClick}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100">
                  <Calendar className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">No upcoming appointments</h3>
                <p className="mt-2 text-sm text-gray-500">
                  You don't have any scheduled appointments. Book an appointment to get started.
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
            )}
          </div>
          
          {pastAppointments.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Past Appointments</h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pastAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onCancel={handleCancelClick}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancel Appointment</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this appointment? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                No, Keep It
              </button>
              <button
                onClick={confirmCancellation}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;