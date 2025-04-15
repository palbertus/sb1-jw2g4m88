import React from 'react';

interface PromotionalBannersProps {
  handleBannerClick: (bannerId: string) => void;
}

export const PromotionalBanners = ({ handleBannerClick }: PromotionalBannersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src="https://dev.antilop.org/images/banner-1.webp" 
          alt="Promotional Banner 1"
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => handleBannerClick('banner_1')}
        />
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src="https://dev.antilop.org/images/banner-2.webp" 
          alt="Promotional Banner 2"
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => handleBannerClick('banner_2')}
        />
      </div>
    </div>
  );
};