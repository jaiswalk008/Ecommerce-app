import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContextProvider from './Components/Context/CartContextProvider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { AuthContextProvider } from './Components/Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <AuthContextProvider>
    <CartContextProvider><BrowserRouter><App/></BrowserRouter></CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);