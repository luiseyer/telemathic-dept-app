import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './tailwind.css';
import Base from './base';

// import { createBrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Base />
  </StrictMode>,
);
