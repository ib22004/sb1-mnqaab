import React from 'react';
import { CheckCircle, Camera, Server, HardDrive } from 'lucide-react';

export default function Compatibility() {
  return (
    <div className="bg-gray-50 py-16" id="compatibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Universal Compatibility
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform works seamlessly with most major CCTV systems and IP cameras
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Camera className="h-6 w-6 text-blue-600" />
              Supported Camera Brands
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {cameraBrands.map((brand, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Server className="h-6 w-6 text-blue-600" />
              Compatible NVR Systems
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {nvrSystems.map((system, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{system}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-2 mb-6">
            <HardDrive className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold">System Requirements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4">Minimum Requirements</h4>
              <ul className="space-y-3">
                {minimumRequirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Recommended</h4>
              <ul className="space-y-3">
                {recommendedRequirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cameraBrands = [
  'Hikvision',
  'Dahua',
  'Axis',
  'Hanwha',
  'Uniview',
  'Vivotek',
  'Bosch',
  'Panasonic'
];

const nvrSystems = [
  'Hikvision NVR',
  'Dahua NVR',
  'Milestone',
  'Genetec',
  'Axis Companion',
  'Synology',
  'QNAP',
  'Blue Iris'
];

const minimumRequirements = [
  'Internet connection: 2 Mbps upload',
  'Camera resolution: 1080p',
  'Storage: 32GB available space',
  'Processor: Dual-core 2.0 GHz'
];

const recommendedRequirements = [
  'Internet connection: 10 Mbps upload',
  'Camera resolution: 4K support',
  'Storage: 256GB available space',
  'Processor: Quad-core 3.0 GHz'
];