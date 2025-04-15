# Analytics Dashboard

A modern, interactive dashboard for testing and monitoring Google Tag Manager (GTM) events and data layer pushes. Built with React, TypeScript, and Tailwind CSS.

![Analytics Dashboard Screenshot](https://dev.antilop.org/images/analytics-dashboard.webp)

## Features

- 🛍️ **E-commerce Event Testing**
  - Select Promotion
  - View Item
  - Add to Cart
  - Start Checkout
  - Complete Purchase

- 🎯 **Custom Event Testing**
  - Push custom events to the data layer
  - Real-time event logging
  - JSON syntax highlighting

- 🔒 **Consent Management**
  - Analytics consent updates
  - Ads consent updates
  - Page view tracking

- 📊 **Interactive Elements**
  - Promotional banners with click tracking
  - Logo click tracking
  - Phone number click tracking
  - Google Play Store link

- 💻 **Developer Features**
  - Real-time console logging
  - Formatted JSON output
  - Timestamp tracking
  - Syntax highlighting

## Technology Stack

- ⚛️ React 18
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 📦 Vite
- 🔍 ESLint
- 🎯 Google Tag Manager

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Data Layer Events

The dashboard supports various e-commerce and custom events:

### E-commerce Events

- `select_promotion`: Track promotion selections
- `view_item`: Track product views
- `add_to_cart`: Track items added to cart
- `begin_checkout`: Track checkout initiation
- `purchase`: Track completed purchases

### Custom Events

- Custom event pushing with user-defined names
- Banner click tracking
- Logo click tracking
- Phone number click tracking

### Consent Events

- `consent_update_analytics`: Track analytics consent updates
- `consent_update_ads`: Track advertising consent updates
- `push_page_view`: Track page views

## Project Structure

```
src/
├── components/         # React components
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint code: `npm run lint`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contact

For questions or support, please open an issue in the repository.