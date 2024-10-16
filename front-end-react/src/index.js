import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Service from './components/service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="mockup-window bg-base-300">

      <Service />

    </div>
  </React.StrictMode>
);

reportWebVitals();
