import { productsArr } from "../constant";
import Card from "./Card";
import "./Body.css"
import { useContext, useState } from "react";
import CartContext from "../Context/cart-context";
import findProduct from "../Helpers/findProduct";
import CartModal from '../Cart/CartModal';
import { createPortal } from "react-dom";
const Body = (props) =>{
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (e)=>{
        const id = e.target.id;
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
    const [showModal , setShowModal] = useState(false);
    const showModalHandler = () => setShowModal(prevState => !prevState);
    return (
        <>
            <div >
                <h3 className="text-center ">Music</h3>
                <div className="music">
                {productsArr.map((element) => {
                   return  <Card key={element.id} addToCart={addToCartHandler} element={element}/>
                })}

                </div>
            </div>
            {/* <div >
                <h3 className="text-center ">Merch</h3>
                <div className="merch">
                {productsArr.map((element) => {
                   return  <Card key={element.id} element={element}/>
                })}

                </div>
            </div> */}
            <div className="text-center m-3">
                <button onClick={showModalHandler} className="btn text-dark btn-outline-primary btn-secondary">See the cart</button>
            </div>
            {showModal && createPortal(<CartModal onClick={showModalHandler}/> , 
            document.getElementById('modal-area'))}

        </>
    )
}
export default Body;