# Paradise Nursery Shopping Application

A React and Redux Toolkit e-commerce demo for browsing houseplants and managing a shopping cart.

## Features
- Welcome page with Paradise Nursery branding and a Get Started button
- About Us section
- Plant catalogue with three categories and six plants per category
- Product cards with image, name, price, and Add to Cart button
- Redux Toolkit cart state
- Dynamic cart item count
- Increase/decrease quantities and remove products
- Cart subtotal and overall total
- Checkout placeholder and Continue Shopping navigation
- Responsive layout

## Technology
- React
- JavaScript (ES6)
- CSS
- Redux Toolkit and React Redux
- React Router
- Vite

## Run locally
1. Install Node.js (LTS).
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Project files
- `src/AboutUs.jsx` — company information
- `src/App.css` — application and landing-page styles, including background image styling
- `src/App.jsx` — page layout and navigation
- `src/CartSlice.jsx` — Redux cart slice and reducers
- `src/ProductList.jsx` — product listing and Add to Cart behaviour
- `src/CartItem.jsx` — shopping cart page
- `src/store.js` — Redux store configuration

## Notes
This is a learning project. Checkout is a placeholder and does not process real payments.
