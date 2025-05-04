import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses this instead of 'react-dom'
import App from './App';

// Make sure you're using 'createRoot' for React 18+
const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root div
root.render(  // Use 'render' on the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
