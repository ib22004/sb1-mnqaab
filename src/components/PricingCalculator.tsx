import React, { useState, useMemo } from 'react';
import { Calculator, Camera, Clock, Calendar } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface CalculatorProps {
  basePrice: number;
  resolution: '2MP' | '4MP' | '8MP';
  isAnnual: boolean;
  planType: 'motion' | 'continuous';
  duration: '2days' | '7days' | '14days' | '30days' | '40days' | '60days' | '90days' | '120days' | '180days' | '1year' | '2years' | '3years' | '4years';
}

export default function PricingCalculator({
  resolution: initialResolution,
  isAnnual: initialIsAnnual,
  planType: initialPlanType,
  duration: initialDuration
}: CalculatorProps) {
  const [cameras, setCameras] = useState(1);
  const [recordingType, setRecordingType] = useState<'motion' | 'continuous'>(initialPlanType);
  const [duration, setDuration] = useState(initialDuration);
  const [resolution, setResolution] = useState(initialResolution);
  const [isAnnual, setIsAnnual] = useState(initialIsAnnual);
  
  const { formatPrice } = useCurrency();

  const basePrices = {
    '2MP': {
      motion: {
        '2days': 4.64,
        '7days': 4.79,
        '14days': 5.24,
        '30days': 6.14,
        '40days': 6.29,
        '60days': 6.59,
        '90days': 6.74,
        '120days': 6.89,
        '180days': 7.79,
        '1year': 8.24,
        '2years': 9.29,
        '3years': 10.19,
        '4years': 11.09
      },
      continuous: {
        '2days': 6.14,
        '7days': 7.34,
        '14days': 8.99,
        '30days': 10.64,
        '40days': 11.84,
        '60days': 14.39,
        '90days': 14.54,
        '120days': 14.69,
        '180days': 19.19,
        '1year': 20.99,
        '2years': 24.74,
        '3years': 28.49,
        '4years': 32.24
      }
    },
    '4MP': {
      motion: {
        '2days': 4.94,
        '7days': 5.54,
        '14days': 6.44,
        '30days': 7.79,
        '40days': 7.94,
        '60days': 8.99,
        '90days': 9.14,
        '120days': 9.29,
        '180days': 9.44,
        '1year': 9.74,
        '2years': 11.54,
        '3years': 13.49,
        '4years': 15.29
      },
      continuous: {
        '2days': 6.89,
        '7days': 9.29,
        '14days': 12.59,
        '30days': 14.84,
        '40days': 17.39,
        '60days': 22.49,
        '90days': 22.64,
        '120days': 22.79,
        '180days': 22.94,
        '1year': 25.64,
        '2years': 32.99,
        '3years': 40.49,
        '4years': 47.99
      }
    },
    '8MP': {
      motion: {
        '2days': 5.39,
        '7days': 6.29,
        '14days': 7.49,
        '30days': 9.59,
        '40days': 9.74,
        '60days': 11.24,
        '90days': 11.39,
        '120days': 11.54,
        '180days': 11.69,
        '1year': 11.84,
        '2years': 13.94,
        '3years': 16.79,
        '4years': 19.49
      },
      continuous: {
        '2days': 7.64,
        '7days': 11.24,
        '14days': 16.19,
        '30days': 19.04,
        '40days': 22.94,
        '60days': 30.59,
        '90days': 30.74,
        '120days': 30.89,
        '180days': 31.04,
        '1year': 31.19,
        '2years': 41.39,
        '3years': 52.49,
        '4years': 63.74
      }
    }
  };

  const calculatePrice = useMemo(() => {
    const basePrice = basePrices[resolution][recordingType][duration];
    const totalPrice = basePrice * cameras;
    return totalPrice;
  }, [resolution, recordingType, duration, cameras]);

  const calculateAnnualPrice = useMemo(() => {
    const monthlyPrice = calculatePrice;
    const annualPrice = monthlyPrice * 12 * 0.9; // 10% discount for annual billing
    return annualPrice;
  }, [calculatePrice]);

  const price = calculatePrice;
  const annualPrice = calculateAnnualPrice;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Camera Resolution
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['2MP', '4MP', '8MP'].map((res) => (
                <button
                  key={res}
                  onClick={() => setResolution(res as '2MP' | '4MP' | '8MP')}
                  className={`py-2 px-4 rounded-md ${
                    resolution === res
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {res}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recording Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRecordingType('motion')}
                className={`py-2 px-4 rounded-md ${
                  recordingType === 'motion'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Motion Triggered
              </button>
              <button
                onClick={() => setRecordingType('continuous')}
                className={`py-2 px-4 rounded-md ${
                  recordingType === 'continuous'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                24/7 Continuous
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Storage Duration
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['2days', '7days', '30days', '90days', '1year'].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d as any)}
                  className={`py-2 px-4 rounded-md ${
                    duration === d
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {formatDuration(d)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Billing Cycle
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setIsAnnual(false)}
                className={`py-2 px-4 rounded-md ${
                  !isAnnual
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`py-2 px-4 rounded-md ${
                  isAnnual
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Annual (10% off)
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Price Summary</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Base price per camera</span>
              <span>{formatPrice(basePrices[resolution][recordingType][duration])}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Number of cameras</span>
              <span>× {cameras}</span>
            </div>
            {isAnnual && (
              <div className="flex justify-between text-green-600">
                <span>Annual discount</span>
                <span>-10%</span>
              </div>
            )}
            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between font-medium text-lg">
                <span>Total {isAnnual ? 'annual' : 'monthly'}</span>
                <span className="text-blue-600">
                  {formatPrice(isAnnual ? annualPrice : price)}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {isAnnual 
                  ? `(${formatPrice(annualPrice / 12)} per month)`
                  : `(${formatPrice(price * 12)} per year)`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const formatDuration = (duration: string) => {
  switch (duration) {
    case '2days': return '2 Days';
    case '7days': return '7 Days';
    case '14days': return '14 Days';
    case '30days': return '30 Days';
    case '40days': return '40 Days';
    case '60days': return '60 Days';
    case '90days': return '90 Days';
    case '120days': return '120 Days';
    case '180days': return '180 Days';
    case '1year': return '1 Year';
    case '2years': return '2 Years';
    case '3years': return '3 Years';
    case '4years': return '4 Years';
    default: return duration;
  }
};