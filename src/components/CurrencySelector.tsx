import React from 'react';
import { DollarSign } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export default function CurrencySelector() {
  const { currency, setCurrency, availableCurrencies } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      <DollarSign className="h-5 w-5 text-gray-400" />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {availableCurrencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
}