import React from 'react';
import { unstable_createRoot } from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

unstable_createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
