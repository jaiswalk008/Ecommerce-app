import React, { createContext, useState, useContext } from "react";
import CartContext from './cart-context';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({
    token: '',
    setToken: (token) => {},
    isLoggedIn: false,
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const history = useHistory();
    const [token, setToken] = useState(initialToken);
    const cartCtx = useContext(CartContext);
    // console.log(token);
    const setTokenHandler = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    }

    const logoutHandler = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        setTokenHandler('');
        cartCtx.setItems([]);
        
        history.push('/login');
        
    }

    const userLoggedIn = !!token;

    const authCtx = {
        token: token,
        setToken: setTokenHandler,
        isLoggedIn: userLoggedIn,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={authCtx}>{props.children}</AuthContext.Provider>
}
