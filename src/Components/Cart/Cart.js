import { createPortal } from "react-dom";
import { useState } from "react";
import CartModal from "./CartModal";
const Cart = (props) =>{
    const [showModal , setShowModal] = useState(false);

    const modalHandler = () => {
        setShowModal(prevState => !prevState);
    }
    return (
        <span className='text-end p-2 fs-4 w-100 text-light'>
            <button onClick={modalHandler} className="btn text-light fs-4">Cart🛒</button>
            {showModal && createPortal(<CartModal onClick={modalHandler}/> , 
            document.getElementById('modal-area'))}
           
        </span>
    )
}
export default Cart;