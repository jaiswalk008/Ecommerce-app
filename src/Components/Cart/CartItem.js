import './Cart.css'
import { useState } from 'react';
const CartItem = ({element , id , removeItem}) =>{
    const [qty , setQty] = useState('1');
    const qtyHandler = (e) => setQty(e.target.value)
    
    return (
        <>
            <section className="d-flex justify-content-between align-items-center">
                <span className='cart-item'>
                    <img src={element.imageUrl} alt='item-view'></img> 
                    <span>{element.title}</span>
                </span>
                
                    
                <span className='fs-4'>Rs. {element.price}</span>
            
                <span className='cart-item-details'>
                    <input className='' onChange={qtyHandler} type='text' min={'1'} name='qty' id='qty' value={qty}/>
                    <button id={id} onClick={removeItem} className='btn mb-2 btn-danger'>Remove</button>
                </span>
                
            </section>
            <hr/>
        </>
        
    )

}
export default CartItem;