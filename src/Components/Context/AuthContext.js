import React from "react"
import { useState } from "react";
export const AuthContext = React.createContext({
    token:'',
    setToken:(token) => {},
    isLoggedIn:false,
})

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token');
    const [token , setToken] = useState(initialToken);

    const setTokenHandler = (token) =>{
        setToken(token);
        localStorage.setItem('token', token);
    }
    const userLoggedIn = !!token;
    const authCtx = {
        token:token,
        setToken:setTokenHandler,
        isLoggedIn:userLoggedIn
    }
    return <AuthContext.Provider value={authCtx}>{props.children}</AuthContext.Provider>
}
