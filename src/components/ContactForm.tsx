import React, { useState } from 'react';
import { X, Mail, Phone, Building2, User } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cameras: '1-5',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEBHOOK_URL = 'https://chat.googleapis.com/v1/spaces/AAAAi9FfGAo/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=fhP_PJh_oE_WTfxRi9JHxff5Lp9v36qNh7zmj-mfbBs';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = {
        text: `*New Lead from CCTV Connect*\n\n` +
          `👤 *Name:* ${formData.name}\n` +
          `📧 *Email:* ${formData.email}\n` +
          `📱 *Phone:* ${formData.phone}\n` +
          `🏢 *Company:* ${formData.company}\n` +
          `📹 *Number of Cameras:* ${formData.cameras}\n` +
          `💬 *Message:* ${formData.message}`
      };

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Thank you for your interest! Our team will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        cameras: '1-5',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4" />
                  <span>Full Name</span>
                </div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="h-4 w-4" />
                  <span>Phone Number</span>
                </div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="h-4 w-4" />
                  <span>Company Name</span>
                </div>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Cameras
                <select
                  value={formData.cameras}
                  onChange={(e) => setFormData({ ...formData, cameras: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  <option value="1-5">1-5 cameras</option>
                  <option value="6-10">6-10 cameras</option>
                  <option value="11-20">11-20 cameras</option>
                  <option value="21-50">21-50 cameras</option>
                  <option value="50+">50+ cameras</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Information
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tell us about your requirements..."
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}