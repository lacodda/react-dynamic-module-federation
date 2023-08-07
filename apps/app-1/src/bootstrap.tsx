import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import '@libs/ui';

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
