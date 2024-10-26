import React, { useState } from 'react';
import { Calculator, Camera, Wifi } from 'lucide-react';

interface BitrateInfo {
  resolution: string;
  bitrate: string;
  pixels: string;
}

export default function BandwidthCalculator() {
  const [cameras, setCameras] = useState(1);
  const [selectedResolution, setSelectedResolution] = useState<string>('2MP');

  const bitrateInfo: BitrateInfo[] = [
    { resolution: 'Standard', bitrate: '400', pixels: 'Standard definition' },
    { resolution: '2MP', bitrate: '600', pixels: '1080p' },
    { resolution: '4MP', bitrate: '1200', pixels: '2K' },
    { resolution: '8MP', bitrate: '1800', pixels: '4K' }
  ];

  const selectedBitrateInfo = bitrateInfo.find(info => info.resolution === selectedResolution);
  const totalBandwidth = selectedBitrateInfo ? (parseInt(selectedBitrateInfo.bitrate) * cameras) / 1000 : 0;

  const formatBandwidth = (bandwidth: number): string => {
    if (bandwidth < 1) {
      return `${(bandwidth * 1000).toFixed(0)} Kbps`;
    }
    return `${bandwidth.toFixed(2)} Mbps`;
  };

  return (
    <div className="bg-white py-16" id="bandwidth-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bandwidth Calculator
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estimate your bandwidth requirements based on your camera setup
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Camera Resolution
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {bitrateInfo.map((info) => (
                    <button
                      key={info.resolution}
                      onClick={() => setSelectedResolution(info.resolution)}
                      className={`py-2 px-4 rounded-md flex items-center justify-center ${
                        selectedResolution === info.resolution
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      <span>{info.resolution}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="cameras" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Cameras
                </label>
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    id="cameras"
                    min="1"
                    max="100"
                    value={cameras}
                    onChange={(e) => setCameras(Math.max(1, parseInt(e.target.value) || 1))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-medium text-gray-900">Bandwidth Requirements</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Resolution</span>
                  <span className="font-medium">
                    {selectedBitrateInfo?.resolution} ({selectedBitrateInfo?.pixels})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bitrate per camera</span>
                  <span className="font-medium">{selectedBitrateInfo?.bitrate} Kbps</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Number of cameras</span>
                  <span className="font-medium">{cameras}</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total bandwidth required</span>
                    <span className="text-xl font-bold text-blue-600">
                      {formatBandwidth(totalBandwidth)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Recommended internet upload speed: {formatBandwidth(totalBandwidth * 1.5)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}