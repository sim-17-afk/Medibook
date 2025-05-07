import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need help? Our team is here for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <Phone className="h-6 w-6 text-cyan-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Phone</h4>
                      <p className="mt-1 text-gray-600">+1 (123) 456-7890</p>
                      <p className="text-gray-600">+1 (123) 456-7891 (Emergency)</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-6 w-6 text-cyan-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Email</h4>
                      <p className="mt-1 text-gray-600">contact@medibook.com</p>
                      <p className="text-gray-600">support@medibook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <MapPin className="h-6 w-6 text-cyan-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Address</h4>
                      <p className="mt-1 text-gray-600">
                        123 Medical Center Dr.<br />
                        Healthcare City, MED 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock className="h-6 w-6 text-cyan-600 mt-1 mr-4" />
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Working Hours</h4>
                      <div className="mt-1 space-y-1">
                        <p className="text-gray-600">
                          <span className="font-medium">Monday - Friday:</span> 8:00 AM - 7:00 PM
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Saturday:</span> 9:00 AM - 5:00 PM
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Sunday:</span> Closed (Emergency Only)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  For medical emergencies, please call our 24/7 emergency line or visit our emergency department.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium text-red-800">Emergency Hotline</p>
                    <p className="text-red-600 text-lg font-bold">+1 (123) 911-0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;