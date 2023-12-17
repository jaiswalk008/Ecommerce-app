import './Cart.css'
// import {productsArr} from '../constant'
import CartItem from './CartItem';
import {useContext, useState } from 'react';
import CartContext from '../Context/cart-context';
import findProduct from '../Helpers/findProduct';
import axios from 'axios';
const CartModal = (props) =>{
    const cartCtx = useContext(CartContext);
    const [products ,setProducts] = useState(cartCtx.items);
    const email = localStorage.getItem('email');
    let transformedEmail = '';
    if(email) {
        email.split('').forEach((c) => {
            if(c!=='@' && c!=='.' && c!==' ') transformedEmail +=(c)
        })
    }
    //cartItems is changing but re-rendering is not happening becasue modal is above root
    const removeItemHandler =async (productId) => {
        const product = findProduct(cartCtx.items, productId)[0];
        const amount = product.price * product.qty;
        console.log(product);
        try{
            const url = `https://crudcrud.com/api/507ac5dc31fe4ea5b73eaf057fbcd368/${transformedEmail}/${product._id}`;
            await axios.delete(url);
            
            const updatedItems = cartCtx.items.filter((item) => +item.id !== +productId);
            setProducts(updatedItems);
        
            cartCtx.addTotal(-amount);
            // Update context state
            cartCtx.setItems(updatedItems)
        }
        catch(err){console.log(err);}
        
      
      };

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
                    return <CartItem  key={index*index} removeItem={() => removeItemHandler(element.id)} element={element}/>;
                })}
                
                <div className='text-end'>
                    <strong className='me-4  fs-3'>Total</strong>
                    <span className=' mt-1 fs-4'>Rs. {cartCtx.total}</span>
                </div>
            </div>
        </div>
    );
}
export default CartModal;