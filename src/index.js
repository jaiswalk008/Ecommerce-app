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
    {/* as we are using react-router-dom in authcontentprovider so it needs to be wrapped inside
    the BrowserRouter copmponent */}
    <BrowserRouter>
    <AuthContextProvider>
    <CartContextProvider><App/></CartContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);