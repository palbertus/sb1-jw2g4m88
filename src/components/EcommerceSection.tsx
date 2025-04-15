import React from 'react';
import { ShoppingCart, Tag, Eye, CreditCard, ShoppingBag, PlusCircle } from 'lucide-react';

interface EcommerceSectionProps {
  handleSelectPromo: () => void;
  handleViewItem: () => void;
  handleStartCheckout: () => void;
  handlePurchase: () => void;
  handleAddToCart: () => void;
}

export const EcommerceSection = ({
  handleSelectPromo,
  handleViewItem,
  handleStartCheckout,
  handlePurchase,
  handleAddToCart
}: EcommerceSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ShoppingCart className="h-5 w-5 mr-2 text-gray-900" />
        E-commerce Events
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleSelectPromo}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <Tag className="h-4 w-4 mr-2" />
          Select Promotion
        </button>
        <button
          onClick={handleViewItem}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Item
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
        <button
          onClick={handleStartCheckout}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Start Checkout
        </button>
        <button
          onClick={handlePurchase}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors col-span-2 flex items-center justify-center"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Complete Purchase
        </button>
      </div>
    </div>
  );
};