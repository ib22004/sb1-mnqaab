import React, { useState } from 'react';
import { Menu, X, Camera, ChevronDown } from 'lucide-react';
import CurrencySelector from './CurrencySelector';
import ContactForm from './ContactForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">CCTV Connect</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2 py-2">
                <DropdownItem href="#residential">Residential</DropdownItem>
                <DropdownItem href="#business">Business</DropdownItem>
                <DropdownItem href="#enterprise">Enterprise</DropdownItem>
              </div>
            </div>
            <CurrencySelector />
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <CurrencySelector />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="#solutions">Solutions</MobileNavLink>
            <button 
              onClick={() => {
                setShowContactForm(true);
                setIsOpen(false);
              }}
              className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-600 hover:text-gray-900">
    {children}
  </a>
);

const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
    {children}
  </a>
);