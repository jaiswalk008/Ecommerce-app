import CartContext from '../Context/cart-context';
import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import getEmail from '../Helpers/getEmail';
const CartItem = ({ element, id, removeItem }) => {
//   const email = localStorage.getItem('email');
//   console.log(getEmail())
  const cartCtx = useContext(CartContext);
  const [qty, setQty] = useState(element.qty);

  const qtyHandler = async (newQty) => {
    cartCtx.items.forEach(async (item) => {
      if (+item.id === +element.id) {
        cartCtx.addTotal(element.price * (newQty - qty));
        item.qty = newQty;
        const { _id, ...payload } = item;
        try {
          const res = await axios.put(
            `https://crudcrud.com/api/716065ba00794fa7b1b10f66a076eb42/${getEmail()}/${item._id}`,
            { ...payload, qty: newQty }
          );
          console.log('Item already in cart:', res.data);
        } catch (error) {
          console.error('Error updating item in cart:', error);
        }
      }
    });
    setQty(newQty);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      qtyHandler(qty);
    }, 500);

    return () => {
        console.log('clearing')
        clearTimeout(timer);
    };
  }, [qty]);

  return (
    <>
      <section className="d-flex justify-content-between align-items-center">
        <span className="cart-item">
          <img src={element.imageUrl} alt="item-view" />
          <span>{element.title}</span>
        </span>

        <span className="fs-4">Rs. {element.price * qty}</span>

        <span className="cart-item-details">
          <input
            onChange={(e) => qtyHandler(parseInt(e.target.value, 10))}
            type="number"
            min={'1'}
            name="qty"
            id="qty"
            value={qty}
          />
          <button
            id={id}
            onClick={removeItem}
            className="btn mb-2 btn-danger"
          >
            Remove
          </button>
        </span>
      </section>
      <hr />
    </>
  );
};

export default CartItem;
