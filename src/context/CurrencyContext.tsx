import React, { createContext, useContext, useState, useEffect } from 'react';

interface ExchangeRate {
  rates: { [key: string]: number };
  lastUpdated: Date;
}

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (price: number) => string;
  exchangeRates: ExchangeRate;
  availableCurrencies: string[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate>({ rates: {}, lastUpdated: new Date() });
  const [availableCurrencies, setAvailableCurrencies] = useState<string[]>([]);

  useEffect(() => {
    // Detect user's locale and currency
    const detectUserCurrency = async () => {
      try {
        const response = await fetch('https://ipapi.co/currency/');
        const detectedCurrency = await response.text();
        if (detectedCurrency && detectedCurrency.length === 3) {
          setCurrency(detectedCurrency);
        }
      } catch (error) {
        // Fallback to browser's locale
        const userLocale = navigator.language;
        try {
          const formatter = new Intl.NumberFormat(userLocale, { style: 'currency', currency: 'USD' });
          const localCurrency = formatter.resolvedOptions().currency;
          setCurrency(localCurrency);
        } catch (err) {
          console.warn('Failed to detect local currency, defaulting to USD');
        }
      }
    };

    detectUserCurrency();
  }, []);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setExchangeRates({
          rates: data.rates,
          lastUpdated: new Date()
        });
        const currencies = Object.keys(data.rates).filter(curr => curr !== 'USD').sort();
        setAvailableCurrencies(['USD', ...currencies]);
      } catch (error) {
        console.warn('Using fallback exchange rates');
        setExchangeRates({
          rates: { USD: 1, NGN: 1500, EUR: 0.85, GBP: 0.73 },
          lastUpdated: new Date()
        });
        setAvailableCurrencies(['USD', 'NGN', 'EUR', 'GBP']);
      }
    };

    fetchExchangeRates();
    const interval = setInterval(fetchExchangeRates, 3600000); // Update every hour
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    try {
      const rate = exchangeRates.rates[currency] || 1;
      const convertedPrice = price * rate;
      
      return new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: currency === 'USD' ? 2 : 0,
        maximumFractionDigits: currency === 'USD' ? 2 : 0
      }).format(convertedPrice);
    } catch (error) {
      return `${currency} ${(price * (exchangeRates.rates[currency] || 1)).toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      formatPrice,
      exchangeRates,
      availableCurrencies
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}