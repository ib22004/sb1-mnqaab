import React from 'react';
import { Shield, Server, Check } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export default function CloudAdapter() {
  const { formatPrice } = useCurrency();

  const adapters = [
    {
      model: "Mini",
      channels: "8",
      channelColor: "#9333ea",
      storage: "32GB",
      dualNetwork: false,
      price: 219
    },
    {
      model: "Mini",
      channels: "16",
      channelColor: "#581c87",
      storage: "32GB",
      dualNetwork: false,
      price: 274
    },
    {
      model: "Enterprise",
      channels: "32",
      channelColor: "#22d3ee",
      storage: "1TB",
      dualNetwork: true,
      price: 1385
    },
    {
      model: "Enterprise",
      channels: "64",
      channelColor: "#115e59",
      storage: "1TB",
      dualNetwork: true,
      price: 2199
    }
  ];

  return (
    <div className="bg-white py-16" id="cloud-adapter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cloud Adapter Options
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Add secure offsite cloud video storage to any CCTV system
          </p>
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Cloud Adapter is a small bridging device which makes it both easy and affordable to add offsite cloud video storage to new and legacy CCTV systems, whilst also adding an extra layer of security.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>5-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adapters.map((adapter, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Cloud Adapter</h3>
                <p className="text-lg font-semibold text-red-500">{adapter.model}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg font-medium">Channels</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-medium" style={{ backgroundColor: adapter.channelColor }}>
                    {adapter.channels}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{adapter.storage} onboard storage</span>
                  </li>
                  {adapter.dualNetwork && (
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Dual network redundancy</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">5-year warranty included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Free lifetime support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-3xl font-bold text-gray-900">{formatPrice(adapter.price)}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Requires monthly or annual subscription
                  </p>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Small Business Solution
            </h3>
            <p className="text-gray-600">
              The 8/16 camera Cloud Adapter Mini is perfect for small to medium-sized installations, offering an affordable way to add cloud storage to your existing CCTV system.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Server className="h-6 w-6 text-blue-600" />
              Enterprise Grade
            </h3>
            <p className="text-gray-600">
              The 32/64 camera Enterprise rack solution is designed for larger installations, featuring dual network redundancy and expanded storage capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}