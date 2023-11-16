import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import CartModal from "./CartModal";
import CartContext from "../Store/cart-context";
const Cart = (props) =>{
    const [showModal , setShowModal] = useState(false);
    const cartCtx = useContext(CartContext);
    const modalHandler = () => {
        setShowModal(prevState => !prevState);
    }
    return (
        <span className='text-end p-2 fs-4 w-100 text-light'>
            <button onClick={modalHandler} className="btn btn-outline-primary text-light fs-4">Cart🛒 <span className="total-items">{cartCtx.items.length}</span></button>
            {showModal && createPortal(<CartModal onClick={modalHandler}/> , 
            document.getElementById('modal-area'))}
        </span>
    )
}
export default Cart;