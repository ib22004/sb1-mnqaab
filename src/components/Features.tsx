import React from 'react';
import { Shield, Clock, Globe, Smartphone, Server, Users } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-16 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for video surveillance
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Professional-grade features designed for businesses and homeowners
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Advanced Security"
              description="End-to-end encryption and secure storage protocols protect your data"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="24/7 Recording"
              description="Continuous recording with smart motion detection and alerts"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-blue-600" />}
              title="Global Access"
              description="Access your footage from anywhere in the world"
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8 text-blue-600" />}
              title="Mobile App"
              description="Powerful mobile apps for iOS and Android devices"
            />
            <FeatureCard
              icon={<Server className="h-8 w-8 text-blue-600" />}
              title="Cloud Storage"
              description="Unlimited cloud storage with automatic backup"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Multi-User Access"
              description="Share access with team members and set permissions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div>
      <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-blue-50">
        {icon}
      </div>
      <p className="ml-16 text-lg font-medium text-gray-900">{title}</p>
    </div>
    <div className="mt-2 ml-16 text-base text-gray-500">
      {description}
    </div>
  </div>
);