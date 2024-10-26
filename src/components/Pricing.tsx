import React from 'react';
import { AlertCircle } from 'lucide-react';
import PricingCalculator from './PricingCalculator';
import { useCurrency } from '../context/CurrencyContext';

export default function Pricing() {
  const { formatPrice } = useCurrency();

  return (
    <div className="bg-white py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Calculate Your Custom Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get an accurate price based on your specific needs
          </p>
        </div>

        <div className="mt-8">
          <PricingCalculator
            basePrice={9.99}
            resolution="2MP"
            isAnnual={false}
            planType="motion"
            duration="30days"
          />
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Important Notes
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="font-medium text-yellow-600">1.</span>
                <span>For storage plans over 180 days, videos are instantly viewable for the first 2 days. After 2 days, retrieval can take up to 12 hours and you will be notified once your requested video is ready to view or download.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-yellow-600">2.</span>
                <span>Prices shown assume an average of 6 hours of motion events are uploaded per camera per day. If usage exceeds this, Videoloft may increase the price or reduce video bitrate following a discussion with the customer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-yellow-600">3.</span>
                <span>Please ensure there is sufficient bandwidth at the location to support 24/7 recording. Full video will be available to view online only.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}