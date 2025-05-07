import React from 'react';
import { Heart, Brain, Stethoscope, Bone, Eye, UserPlus } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'General Medicine',
      description: 'Comprehensive care for all your general health needs, from preventive checkups to treatments.',
      icon: Stethoscope,
    },
    {
      title: 'Cardiology',
      description: 'Expert care for heart-related conditions with advanced diagnostic and treatment options.',
      icon: Heart,
    },
    {
      title: 'Neurology',
      description: 'Specialized treatment for disorders of the brain, spinal cord, and nervous system.',
      icon: Brain,
    },
    {
      title: 'Orthopedics',
      description: 'Treatment for bone and joint issues, including sports injuries, arthritis, and more.',
      icon: Bone,
    },
    {
      title: 'Ophthalmology',
      description: 'Comprehensive eye care services from routine checkups to advanced treatments.',
      icon: Eye,
    },
    {
      title: 'Pediatrics',
      description: 'Specialized healthcare for children from birth through adolescence.',
      icon: UserPlus,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Medical Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of medical services to meet your healthcare needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;