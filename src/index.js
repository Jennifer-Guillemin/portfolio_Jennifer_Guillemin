import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/header.css';
import './styles/contact.css';
import './styles/footer.css';
import './assets/logo.jpg';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
