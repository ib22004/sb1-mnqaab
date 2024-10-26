import React from 'react';
import { X, Download, Mail } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    resolution: string;
    cameras: number;
    recordingType: string;
    duration: string;
    basePrice: number;
    total: number;
    isAnnual: boolean;
  };
}

export default function InvoiceModal({ isOpen, onClose, data }: InvoiceModalProps) {
  const { formatPrice } = useCurrency();
  const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
  const date = new Date().toLocaleDateString();

  if (!isOpen) return null;

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    // For now, we'll just show an alert
    alert('Invoice download started...');
  };

  const handleEmailInvoice = () => {
    // In a real implementation, this would open an email form
    // For now, we'll just show an alert
    alert('Email feature coming soon...');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Invoice</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-xl text-blue-600">CCTV Connect</h3>
                <p className="text-gray-600">Professional Video Surveillance Solutions</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Invoice #{invoiceNumber}</p>
                <p className="text-gray-600">Date: {date}</p>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-4 my-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="py-2">Description</th>
                    <th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">
                      <p className="font-medium">{data.resolution} Cloud Storage Plan</p>
                      <p className="text-sm text-gray-600">
                        {data.cameras} {data.cameras === 1 ? 'camera' : 'cameras'} × {data.recordingType} recording
                      </p>
                      <p className="text-sm text-gray-600">
                        Storage duration: {data.duration}
                      </p>
                      <p className="text-sm text-gray-600">
                        Billing cycle: {data.isAnnual ? 'Annual' : 'Monthly'}
                      </p>
                    </td>
                    <td className="py-2 text-right">{formatPrice(data.total)}</td>
                  </tr>
                  {data.isAnnual && (
                    <tr>
                      <td className="py-2 text-green-600">Annual Discount (10%)</td>
                      <td className="py-2 text-right text-green-600">
                        -{formatPrice(data.total * 0.1)}
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr className="border-t">
                    <td className="py-2 font-bold">Total</td>
                    <td className="py-2 text-right font-bold">
                      {formatPrice(data.isAnnual ? data.total * 0.9 : data.total)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="text-sm text-gray-600">
              <p>Payment Terms: Due upon receipt</p>
              <p>This is a quote and not a final invoice. Prices may vary based on actual usage.</p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <button
                onClick={handleEmailInvoice}
                className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}