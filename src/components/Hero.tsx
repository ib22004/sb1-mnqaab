import React, { useState } from 'react';
import { Shield, Cloud, Zap, X } from 'lucide-react';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cameras: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://chat.googleapis.com/v1/spaces/AAAAi9FfGAo/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=fhP_PJh_oE_WTfxRi9JHxff5Lp9v36qNh7zmj-mfbBs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: `New Lead:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Number of Cameras: ${formData.cameras}
Message: ${formData.message}`
        }),
      });

      if (response.ok) {
        alert('Thank you for your interest! We will contact you shortly.');
        setShowForm(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          cameras: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again later.');
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Cloud Video Storage</span>
                <span className="block text-blue-600">Made Simple</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Secure, reliable cloud storage for all your video footage. Access anywhere, anytime, with enterprise-grade security.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a 
                    href="https://cctvconnect.com/demo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </main>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <Feature
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Enterprise Security"
              description="Bank-grade encryption and secure storage for your sensitive footage"
            />
            <Feature
              icon={<Cloud className="h-8 w-8 text-blue-600" />}
              title="Cloud Storage"
              description="Unlimited cloud storage with instant access from any device"
            />
            <Feature
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Fast Access"
              description="Lightning-fast video streaming and download capabilities"
            />
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1557317605-7457c8c07145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Cloud CCTV monitoring center"
        />
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="cameras" className="block text-sm font-medium text-gray-700">Number of Cameras</label>
                  <input
                    type="number"
                    id="cameras"
                    min="1"
                    required
                    value={formData.cameras}
                    onChange={(e) => setFormData({ ...formData, cameras: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="text-center">
    <div className="flex justify-center">{icon}</div>
    <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
    <p className="mt-2 text-base text-gray-500">{description}</p>
  </div>
);