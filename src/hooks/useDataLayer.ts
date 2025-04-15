import { useCallback } from 'react';
import { generateTransactionId } from '../utils/dataLayer';

export const useDataLayer = (logToConsole: (message: string, data?: any) => void) => {
  const handleSelectPromo = useCallback(() => {
    const promoData = {
      event: 'select_promotion',
      ecommerce: {
        creative_name: 'Summer Banner',
        creative_slot: 'featured_app_1',
        promotion_id: 'P_12345',
        promotion_name: 'Summer Sale',
        items: [{
          item_id: 'SKU_12345',
          item_name: 'Stan and Friends Tee',
          affiliation: 'Google Merchandise Store',
          coupon: 'SUMMER_FUN',
          discount: 2.22,
          index: 0,
          item_brand: 'Google',
          item_category: 'Apparel',
          item_category2: 'Adult',
          item_category3: 'Shirts',
          item_category4: 'Crew',
          item_category5: 'Short sleeve',
          item_list_id: 'related_products',
          item_list_name: 'Related Products',
          item_variant: 'green',
          location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          price: 9.99,
          quantity: 1
        }]
      }
    };

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push(promoData);
    logToConsole('DataLayer Push - Select Promotion', promoData);
  }, [logToConsole]);

  const handleAddToCart = useCallback(() => {
    const addToCartData = {
      event: "add_to_cart",
      ecommerce: {
        currency: "USD",
        value: 72.05,
        items: [{
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 10.01,
          quantity: 3
        },
        {
          item_id: "SKU_12346",
          item_name: "Google Grey Women's Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 3.33,
          index: 1,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "gray",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 21.01,
          promotion_id: "P_12345",
          promotion_name: "Summer Sale",
          quantity: 2
        }]
      }
    };

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push(addToCartData);
    logToConsole('DataLayer Push - Add to Cart', addToCartData);
  }, [logToConsole]);

  const handleViewItem = useCallback(() => {
    const viewItemData = {
      event: "view_item",
      ecommerce: {
        currency: "USD",
        items: [{
          item_id: 'SKU_12345',
          item_name: 'Stan and Friends Tee',
          affiliation: 'Google Merchandise Store',
          coupon: 'SUMMER_FUN',
          currency: 'USD',
          discount: 2.22,
          index: 0,
          item_brand: 'Google',
          item_category: 'Apparel',
          item_category2: 'Adult',
          item_category3: 'Shirts',
          item_category4: 'Crew',
          item_category5: 'Short sleeve',
          item_list_id: 'related_products',
          item_list_name: 'Related Products',
          item_variant: 'green',
          location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          price: 9.99,
          quantity: 1
        }]
      }
    };

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push(viewItemData);
    logToConsole('DataLayer Push - View Item', viewItemData);
  }, [logToConsole]);

  const handleStartCheckout = useCallback(() => {
    const transactionId = generateTransactionId();
    const checkoutData = {
      event: "begin_checkout",
      ecommerce: {
        items: [{
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 10.01,
          quantity: 3
        },
        {
          item_id: "SKU_12346",
          item_name: "Google Grey Women's Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 3.33,
          index: 1,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "gray",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 21.01,
          promotion_id: "P_12345",
          promotion_name: "Summer Sale",
          quantity: 2
        }]
      }
    };

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push(checkoutData);
    logToConsole('DataLayer Push - Begin Checkout', checkoutData);
  }, [logToConsole]);

  const handlePurchase = useCallback(() => {
    const transactionId = generateTransactionId();
    const purchaseData = {
      event: "purchase",
      ecommerce: {
        transaction_id: transactionId,
        currency: "USD",
        value: 72.05,
        tax: 3.60,
        shipping: 5.99,
        coupon: "SUMMER_SALE",
        items: [{
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 10.01,
          quantity: 3
        },
        {
          item_id: "SKU_12346",
          item_name: "Google Grey Women's Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 3.33,
          index: 1,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "gray",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 21.01,
          promotion_id: "P_12345",
          promotion_name: "Summer Sale",
          quantity: 2
        }]
      }
    };

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push(purchaseData);
    logToConsole('DataLayer Push - Purchase', purchaseData);
  }, [logToConsole]);

  const handleConsentAnalytics = useCallback(() => {
    const consentData = { event: 'consent_update_analytics' };
    window.dataLayer.push(consentData);
    logToConsole('DataLayer Push - Analytics Consent', consentData);
  }, [logToConsole]);

  const handleConsentAds = useCallback(() => {
    const consentData = { event: 'consent_update_ads' };
    window.dataLayer.push(consentData);
    logToConsole('DataLayer Push - Ads Consent', consentData);
  }, [logToConsole]);

  const handlePageView = useCallback(() => {
    const pageViewData = { 
      event: 'push_page_view', 
      buttonId: 'pageViewButton' 
    };
    window.dataLayer.push(pageViewData);
    logToConsole('DataLayer Push - Page View', pageViewData);
  }, [logToConsole]);

  const handleBannerClick = useCallback((bannerId: string) => {
    const bannerData = {
      event: 'banner_click',
      banner_id: bannerId
    };
    window.dataLayer.push(bannerData);
    logToConsole('DataLayer Push - Banner Click', bannerData);
  }, [logToConsole]);

  const handleLogoClick = useCallback(() => {
    const logoData = {
      event: 'TTimOOn',
      eventCategory: 'Navigation',
      eventAction: 'Logo Click',
      eventLabel: 'Analytics Dashboard Logo',
      timestamp: new Date().toISOString()
    };
    window.dataLayer.push(logoData);
    logToConsole('DataLayer Push - Logo Click', logoData);
  }, [logToConsole]);

  const handleTelClick = useCallback((phoneNumber: string) => {
    const telData = {
      event: 'phone_click',
      eventCategory: 'Contact',
      eventAction: 'Phone Click',
      eventLabel: phoneNumber,
      timestamp: new Date().toISOString()
    };
    window.dataLayer.push(telData);
    logToConsole('DataLayer Push - Phone Click', telData);
  }, [logToConsole]);

  return {
    handleSelectPromo,
    handleViewItem,
    handleStartCheckout,
    handlePurchase,
    handleConsentAnalytics,
    handleConsentAds,
    handlePageView,
    handleBannerClick,
    handleLogoClick,
    handleTelClick,
    handleAddToCart
  };
};