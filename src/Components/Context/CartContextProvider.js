import { useState } from "react";
import CartContext from "./cart-context"

const CartContextProvider = (props) => {
const [items , setItems] = useState([]);
const [total , setTotal] = useState(0);

const addItemHandler = (item)=>{
    const updatedItems = [...items,item];
    setItems(updatedItems);
}
const addTotalHandler = (price) => setTotal(total+ +price);

const setItemsHandler = (itemsArr) =>{
    setItems(itemsArr);
}
  
const cartContext = {
    items:items,
    total:total,
    addItems:addItemHandler,
    addTotal:addTotalHandler,
    setItems:setItemsHandler
}

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartContextProvider;