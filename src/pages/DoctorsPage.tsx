import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';
import { Search, Filter } from 'lucide-react';

const DoctorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === '' || doctor.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });
  
  useEffect(() => {
    document.title = 'Find a Doctor | MediBook';
  }, []);
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Find a Doctor</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our network of trusted healthcare professionals and book your appointment today.
          </p>
        </div>
        
        <div className="mb-10 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                >
                  <option value="">All Specialties</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">No doctors found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;