import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Add this import:
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '80251318385-q8p2bvufqc91b71k2i0rulmhoj4tq0m1.apps.googleusercontent.com'; // replace with your actual client id

const root = createRoot(document.getElementById('root'));

root.render(
  // Temporarily remove StrictMode to avoid double-invokes during troubleshooting:
  // <StrictMode>
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
  // </StrictMode>
);
