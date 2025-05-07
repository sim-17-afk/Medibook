import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Medicine',
    description: 'Dr. Johnson has over 15 years of experience in primary care. She focuses on preventive medicine and patient education to help her patients maintain optimal health.',
    expertise: ['Preventive Medicine', 'Chronic Disease Management', 'Women\'s Health'],
    rating: 4.9,
    location: 'Downtown Medical Center, 123 Main St',
    phone: '(123) 456-7890',
    email: 'dr.johnson@medibook.com',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableTimeSlots: [
      { start: '09:00', end: '09:30', available: true },
      { start: '10:00', end: '10:30', available: true },
      { start: '11:00', end: '11:30', available: false },
      { start: '13:00', end: '13:30', available: true },
      { start: '14:00', end: '14:30', available: true },
      { start: '15:00', end: '15:30', available: false },
      { start: '16:00', end: '16:30', available: true }
    ]
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    description: 'Dr. Chen is a board-certified cardiologist specializing in heart disease prevention and treatment. He combines cutting-edge technology with compassionate care.',
    expertise: ['Preventive Cardiology', 'Heart Disease', 'Echocardiography', 'Cardiac Rehabilitation'],
    rating: 4.8,
    location: 'Heart Care Center, 456 Oak Ave',
    phone: '(123) 456-7891',
    email: 'dr.chen@medibook.com',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableTimeSlots: [
      { start: '08:30', end: '09:00', available: true },
      { start: '09:30', end: '10:00', available: false },
      { start: '10:30', end: '11:00', available: true },
      { start: '11:30', end: '12:00', available: true },
      { start: '14:30', end: '15:00', available: true },
      { start: '15:30', end: '16:00', available: true },
      { start: '16:30', end: '17:00', available: false }
    ]
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    description: 'Dr. Rodriguez is a warm and caring pediatrician who provides comprehensive care for children from birth through adolescence. She\'s known for her gentle approach and ability to connect with young patients.',
    expertise: ['Well-Child Visits', 'Childhood Immunizations', 'Developmental Assessments', 'Acute Care'],
    rating: 4.9,
    location: 'Children\'s Medical Plaza, 789 Pine St',
    phone: '(123) 456-7892',
    email: 'dr.rodriguez@medibook.com',
    image: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableTimeSlots: [
      { start: '09:00', end: '09:30', available: true },
      { start: '09:30', end: '10:00', available: true },
      { start: '10:30', end: '11:00', available: false },
      { start: '11:30', end: '12:00', available: true },
      { start: '13:30', end: '14:00', available: true },
      { start: '14:30', end: '15:00', available: true },
      { start: '15:30', end: '16:00', available: false }
    ]
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    description: 'Dr. Wilson is an orthopedic surgeon specializing in sports medicine and joint replacement. With his extensive experience, he helps patients regain mobility and improve their quality of life.',
    expertise: ['Sports Medicine', 'Joint Replacement', 'Fracture Care', 'Arthroscopy'],
    rating: 4.7,
    location: 'Orthopedic Specialists, 321 Elm St',
    phone: '(123) 456-7893',
    email: 'dr.wilson@medibook.com',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableTimeSlots: [
      { start: '08:00', end: '08:30', available: true },
      { start: '08:30', end: '09:00', available: true },
      { start: '09:30', end: '10:00', available: true },
      { start: '10:30', end: '11:00', available: false },
      { start: '13:00', end: '13:30', available: true },
      { start: '15:00', end: '15:30', available: true },
      { start: '16:00', end: '16:30', available: true }
    ]
  },
  {
    id: '5',
    name: 'Dr. Olivia Thompson',
    specialty: 'Dermatology',
    description: 'Dr. Thompson is a board-certified dermatologist who treats a wide range of skin conditions. She is passionate about helping patients achieve healthy skin and confidence in their appearance.',
    expertise: ['Medical Dermatology', 'Skin Cancer Screening', 'Acne Treatment', 'Cosmetic Procedures'],
    rating: 4.8,
    location: 'Dermatology Associates, 654 Maple Ave',
    phone: '(123) 456-7894',
    email: 'dr.thompson@medibook.com',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableTimeSlots: [
      { start: '09:00', end: '09:30', available: true },
      { start: '10:00', end: '10:30', available: false },
      { start: '11:00', end: '11:30', available: true },
      { start: '13:00', end: '13:30', available: true },
      { start: '14:00', end: '14:30', available: true },
      { start: '15:00', end: '15:30', available: false },
      { start: '16:00', end: '16:30', available: true }
    ]
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: 'Neurology',
    description: 'Dr. Kim is a neurologist specializing in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nerves. He is dedicated to providing personalized care for complex neurological conditions.',
    expertise: ['Headache Disorders', 'Multiple Sclerosis', 'Epilepsy', 'Movement Disorders'],
    rating: 4.9,
    location: 'Neurology Center, 987 Walnut St',
    phone: '(123) 456-7895',
    email: 'dr.kim@medibook.com',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableTimeSlots: [
      { start: '08:30', end: '09:00', available: true },
      { start: '09:30', end: '10:00', available: true },
      { start: '10:30', end: '11:00', available: true },
      { start: '13:30', end: '14:00', available: false },
      { start: '14:30', end: '15:00', available: true },
      { start: '15:30', end: '16:00', available: true },
      { start: '16:30', end: '17:00', available: true }
    ]
  },
];