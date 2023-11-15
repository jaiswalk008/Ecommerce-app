import './Cart.css'
import {productsArr} from '../constant'
import CartItem from './CartItem';
import { useState } from 'react';
const CartModal = (props) =>{
    const [products ,setProducts] = useState(productsArr);
    const removeItemHandler = (e) =>{
        const ind = e.target.id;
        // console.log(ind) ind= index
        const updatedProducts = [...products];
        updatedProducts.splice(ind,1)
        setProducts(updatedProducts);
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div><button onClick={props.onClick} className='close btn'>X</button></div>
                <h2 className='text-center'>Cart</h2>
                <hr></hr>
                <section className='cart-header'>
                    <span>ITEM</span>
                    <span>Price</span>
                    <span>Quantity</span>
                </section>
                {products.map((element ,index) => {
                    return <CartItem key={index*index} removeItem={removeItemHandler} id={index} element={element}/>;
                })}
                
                <div c>
                    <span className='float-end mt-1 fs-4'>Rs. 220</span>
                    <strong className='me-4 float-end fs-3'>Total</strong>
                </div>
            </div>
        </div>
    );
}
export default CartModal;