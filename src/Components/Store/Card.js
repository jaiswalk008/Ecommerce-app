import { Link } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import addToCartHandler from "../Helpers/addToCartHandler";
const Card = ({element}) => {
    const cartCtx = useContext(CartContext);

    return (
        <div style={{width:"300px"}} className="d-flex m-3 justify-content-center flex-column">
            <div className="text-center">
            <h3>{element.title}</h3>
            <Link to={"/store/"+element.id}> <img className="card-image"  src={element.imageUrl}
            alt="item"></img></Link>
           
            </div>
            <div className="m-2">
                <strong className="pt-2">Rs. {element.price}</strong>
                <button id={element.id} className="btn btn-primary float-end" onClick={() => addToCartHandler(element.id,cartCtx)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card;