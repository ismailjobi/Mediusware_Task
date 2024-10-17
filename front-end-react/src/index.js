import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Service from './components/service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-base-100 flex justify-center px-20 py-5 h-screen">
      <Service />
    </div>
  </React.StrictMode>
);

reportWebVitals();
