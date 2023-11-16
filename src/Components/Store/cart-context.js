import React from "react"
const CartContext = React.createContext({
    addItems:(item) =>{},
    items:[],
    total:0,
    addTotal:(price) => {},
    setItems:(itemsArr) => {}
})
export default CartContext;