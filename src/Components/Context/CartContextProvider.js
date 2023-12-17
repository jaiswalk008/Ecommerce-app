import { useEffect, useState } from "react";
import CartContext from "./cart-context"
import axios from "axios";
import getEmail from "../Helpers/getEmail";

const CartContextProvider = (props) => {
const [items , setItems] = useState([]);
const [total , setTotal] = useState(0);

const fetchCart = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/507ac5dc31fe4ea5b73eaf057fbcd368/" +
          getEmail()
      );
      console.log(res);
      setItems(res.data);
      const total = res.data.reduce((acc , curr) =>{
        acc= acc+(curr.price*curr.qty);
        console.log(acc);
        return acc;
      },0)
      setTotal(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  useEffect(() => {
    if(getEmail) fetchCart();
  }, []);
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