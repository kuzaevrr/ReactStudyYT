import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title="Введи, что нибудь!"/>
  </React.StrictMode>
);