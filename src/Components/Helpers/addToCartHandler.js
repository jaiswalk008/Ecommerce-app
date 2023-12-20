 
import findProduct from "./findProduct";
import { productsArr } from "../constant";
import axios from "axios";
import getEmail from './getEmail'
const addToCartHandler = async (id , cartCtx)=>{
     
    console.log(id)
    let product = findProduct(productsArr , id)[0];
    // console.log(product)
    let itemAlreadyInCart = false;
    
    cartCtx.items.forEach((item)=> {
        if(+item.id===+id){
            item.qty+=1;
            itemAlreadyInCart = true;
            product = {...item};
        }
    })
   
    console.log(product)
    if(!itemAlreadyInCart) {
        // cartCtx.addItems({...product,qty:1});
        try {
            const res =await axios.post('https://crudcrud.com/api/716065ba00794fa7b1b10f66a076eb42/'+getEmail(),
            {...product,qty:1} )
            console.log('new item in the cart')
            console.log(res.data)
            cartCtx.addItems(res.data);
        } catch (error) {
            console.log(error);
        }
    }else{
        try {
            const { _id, ...payload } = product;
            const res =await axios.put(`https://crudcrud.com/api/716065ba00794fa7b1b10f66a076eb42/${getEmail()}/${product._id}`,
            {...payload,qty:product.qty+1} )
            console.log('item already in cart')
            console.log(res.data);
            // cartCtx.addItems(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    cartCtx.addTotal(product.price);
    // console.log(cartCtx.items);
}
export default addToCartHandler;