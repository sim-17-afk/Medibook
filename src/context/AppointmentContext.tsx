import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appointment } from '../types';

interface AppointmentContextType {
  appointments: Appointment[];
  latestAppointment: Appointment | null;
  bookAppointment: (appointment: Appointment) => void;
  cancelAppointment: (id: string) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });
  
  const [latestAppointment, setLatestAppointment] = useState<Appointment | null>(() => {
    const saved = localStorage.getItem('latestAppointment');
    return saved ? JSON.parse(saved) : null;
  });
  
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);
  
  useEffect(() => {
    if (latestAppointment) {
      localStorage.setItem('latestAppointment', JSON.stringify(latestAppointment));
    }
  }, [latestAppointment]);
  
  const bookAppointment = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
    setLatestAppointment(appointment);
  };
  
  const cancelAppointment = (id: string) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
    
    if (latestAppointment && latestAppointment.id === id) {
      setLatestAppointment(null);
    }
  };
  
  return (
    <AppointmentContext.Provider value={{ 
      appointments, 
      latestAppointment,
      bookAppointment, 
      cancelAppointment 
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};