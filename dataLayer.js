// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Function to format JSON with syntax highlighting
function formatJSON(obj) {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'json-number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }
        return `<span class="${cls}">${match}</span>`;
    });
}

// Console logging function with improved formatting
function logToConsole(message, data) {
    const consoleEl = document.getElementById('console');
    const entry = document.createElement('div');
    entry.className = 'console-entry';

    const timestamp = document.createElement('div');
    timestamp.className = 'console-timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    entry.appendChild(timestamp);

    const messageEl = document.createElement('div');
    messageEl.className = 'console-message';
    messageEl.textContent = message;
    entry.appendChild(messageEl);

    if (data) {
        const jsonEl = document.createElement('div');
        jsonEl.className = 'console-json';
        jsonEl.innerHTML = formatJSON(data);
        entry.appendChild(jsonEl);
    }

    consoleEl.insertBefore(entry, consoleEl.firstChild);
}

// DataLayer event handlers
function handleSelectPromo() {
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
}

function handleViewItem() {
    const viewItemData = {
        event: "view_item",
        ecommerce: {
            currency: "USD",
            value: 7.77,
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
}

function handleStartCheckout() {
    const checkoutData = {
        event: "begin_checkout",
        ecommerce: {
            transaction_id: "T_12345",
            value: 72.05,
            tax: 3.60,
            shipping: 5.99,
            currency: "USD",
            coupon: "SUMMER_SALE",
            items: [{
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
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
}

function handlePurchase() {
    const purchaseData = {
        event: "purchase",
        ecommerce: {
            transaction_id: "T_12345",
            affiliation: "Google Merchandise Store",
            value: 72.05,
            tax: 3.60,
            shipping: 5.99,
            currency: "USD",
            coupon: "SUMMER_SALE",
            items: [{
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
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
}

function handleConsentAnalytics() {
    const consentData = { event: 'consent_update_analytics' };
    window.dataLayer.push(consentData);
    logToConsole('DataLayer Push - Analytics Consent', consentData);
}

function handleConsentAds() {
    const consentData = { event: 'consent_update_ads' };
    window.dataLayer.push(consentData);
    logToConsole('DataLayer Push - Ads Consent', consentData);
}

function handlePageView() {
    const pageViewData = {
        event: 'push_page_view',
        buttonId: 'pageViewButton'
    };
    window.dataLayer.push(pageViewData);
    logToConsole('DataLayer Push - Page View', pageViewData);
}

function handleBannerClick(bannerId) {
    const bannerData = {
        event: 'banner_click',
        banner_id: bannerId
    };
    window.dataLayer.push(bannerData);
    logToConsole('DataLayer Push - Banner Click', bannerData);
}