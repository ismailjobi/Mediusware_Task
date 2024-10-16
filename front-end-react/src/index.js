import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Service from './components/service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-base-200 flex justify-center px-80 "> <Service /></div>
  </React.StrictMode>
);

reportWebVitals();
