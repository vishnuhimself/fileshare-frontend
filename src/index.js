import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);