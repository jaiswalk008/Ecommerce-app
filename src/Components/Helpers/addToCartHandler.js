 
import findProduct from "./findProduct";
import { productsArr } from "../constant";
 
const addToCartHandler = (id , cartCtx)=>{
     
    console.log(id)
    const product = findProduct(productsArr , id)[0];
    // console.log(product)
    let itemAlreadyInCart = false;
    
    cartCtx.items.forEach((item)=> {
        if(+item.id===+id){
            item.qty+=1;
            itemAlreadyInCart = true;
        }
    })
    
    if(!itemAlreadyInCart) cartCtx.addItems({...product,qty:1});
    cartCtx.addTotal(product.price);
    console.log(cartCtx.items);
}
export default addToCartHandler;