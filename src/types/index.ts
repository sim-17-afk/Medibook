export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  expertise: string[];
  rating: number;
  location: string;
  phone: string;
  email: string;
  image: string;
  availableTimeSlots: TimeSlot[];
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  startTime: string;
  endTime: string;
  reason?: string;
  location: string;
  status: 'confirmed' | 'cancelled' | 'completed';
}