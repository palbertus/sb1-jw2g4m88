import React from 'react';
import { Bell, Settings, UserCircle, Phone } from 'lucide-react';

interface NavigationProps {
  handleLogoClick?: () => void;
  handleTelClick?: (phoneNumber: string) => void;
}

export const Navigation = ({ handleLogoClick, handleTelClick }: NavigationProps) => {
  const phoneNumber = '+1234567890';

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (handleTelClick) {
      handleTelClick(phoneNumber);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="https://dev.antilop.org/images/antilop-media-logo.png"
              alt="Antilop Media Logo"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">Analytics Dashboard</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={handlePhoneClick}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="hidden sm:block">{phoneNumber}</span>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.example.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[40px] hover:opacity-90 transition-opacity"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-full"
              />
            </a>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <UserCircle className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};