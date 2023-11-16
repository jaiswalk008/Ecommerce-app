import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContextProvider from './Components/Store/CartContextProvider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider><BrowserRouter><App/></BrowserRouter></CartContextProvider>
    
  </React.StrictMode>
);