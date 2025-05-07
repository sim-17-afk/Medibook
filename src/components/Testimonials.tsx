import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      text: 'MediBook made it so easy to book my appointments. The interface is intuitive and I love that I can see all my upcoming appointments in one place. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      text: 'As someone with a busy schedule, being able to book appointments online has been a game-changer. The reminders are helpful and the whole process is seamless.',
    },
    {
      name: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
      text: 'I appreciate how easy it is to find specialists in my area. The doctor profiles are detailed and helped me choose the right provider for my needs.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Patients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to have helped thousands of patients book their medical appointments easily.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;