import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import { Doctor, TimeSlot } from '../types';
import DatePicker from './DatePicker';
import TimeSlotPicker from './TimeSlotPicker';

interface AppointmentFormProps {
  doctor: Doctor;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ doctor }) => {
  const navigate = useNavigate();
  const { bookAppointment } = useAppointment();
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [reason, setReason] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!patientName.trim()) errors.patientName = 'Name is required';
    if (!patientEmail.trim()) errors.patientEmail = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(patientEmail)) errors.patientEmail = 'Email is invalid';
    if (!patientPhone.trim()) errors.patientPhone = 'Phone is required';
    if (!selectedDate) errors.date = 'Date is required';
    if (!selectedTimeSlot) errors.timeSlot = 'Time slot is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const appointment = {
      id: Math.random().toString(36).substr(2, 9),
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      patientName,
      patientEmail,
      patientPhone,
      date: selectedDate!.toISOString(),
      startTime: selectedTimeSlot!.start,
      endTime: selectedTimeSlot!.end,
      reason,
      location: doctor.location,
      status: 'confirmed'
    };
    
    bookAppointment(appointment);
    navigate('/confirmation');
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Book an Appointment</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            id="patientName"
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
              formErrors.patientName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formErrors.patientName && (
            <p className="mt-1 text-sm text-red-600">{formErrors.patientName}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="patientEmail"
              type="email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                formErrors.patientEmail ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formErrors.patientEmail && (
              <p className="mt-1 text-sm text-red-600">{formErrors.patientEmail}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="patientPhone"
              type="tel"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                formErrors.patientPhone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formErrors.patientPhone && (
              <p className="mt-1 text-sm text-red-600">{formErrors.patientPhone}</p>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Date
          </label>
          <DatePicker 
            selectedDate={selectedDate} 
            onChange={setSelectedDate} 
            hasError={!!formErrors.date}
          />
          {formErrors.date && (
            <p className="mt-1 text-sm text-red-600">{formErrors.date}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Time
          </label>
          <TimeSlotPicker 
            timeSlots={doctor.availableTimeSlots} 
            selectedTimeSlot={selectedTimeSlot}
            onChange={setSelectedTimeSlot}
            hasError={!!formErrors.timeSlot}
          />
          {formErrors.timeSlot && (
            <p className="mt-1 text-sm text-red-600">{formErrors.timeSlot}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
            Reason for Visit (Optional)
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        
        <div>
          <button 
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;