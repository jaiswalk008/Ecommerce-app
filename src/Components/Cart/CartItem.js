import CartContext from '../Context/cart-context';
import './Cart.css'
import { useContext, useState } from 'react';
const CartItem = ({element , id , removeItem }) =>{
    // console.log(element)
    const cartCtx = useContext(CartContext);
    const [qty , setQty] = useState(element.qty);
    const qtyHandler = (e) => {
        const newQty = parseInt(e.target.value, 10);
        cartCtx.items.forEach((item) => {
            if(+item.id===+element.id){
                cartCtx.addTotal(element.price*(newQty-qty))
                item.qty = newQty;
            }
        })
        setQty((prevQty) => newQty);
      };
      
    
    return (
        <>
            <section className="d-flex justify-content-between align-items-center">
                <span className='cart-item'>
                    <img src={element.imageUrl} alt='item-view'></img> 
                    <span>{element.title}</span>
                </span>
                
                    
                <span className='fs-4'>Rs. {element.price * qty}</span>
            
                <span className='cart-item-details'>
                    <input  onChange={qtyHandler} type='number' min={'1'} name='qty' id='qty' value={qty}/>
                    <button id={id} onClick={removeItem} className='btn mb-2 btn-danger'>Remove</button>
                </span>
                
            </section>
            <hr/>
        </>
        
    )

}
export default CartItem;