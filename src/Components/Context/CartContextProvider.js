import { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context"
import axios from "axios";
import getEmail from "../Helpers/getEmail";
import { AuthContext } from "./AuthContext";
const CartContextProvider = (props) => {
const [items , setItems] = useState([]);
const [total , setTotal] = useState(0);
const authCtx = useContext(AuthContext);

const fetchCart = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/716065ba00794fa7b1b10f66a076eb42/" +
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

  const addItemHandler = (item)=>{
    const updatedItems = [...items,item];
    setItems(updatedItems);
}
const setItemsHandler = (itemsArr) =>{
  setItems(itemsArr);
  console.log('removed item')
}
  useEffect(() => {
    if(getEmail()) fetchCart();
    if(!authCtx.token) setItems([])
  }, [authCtx.token]);


const addTotalHandler = (price) => setTotal(total+ +price);


  
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