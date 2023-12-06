import {useParams} from "react-router-dom";
import findProduct from "../Helpers/findProduct";
import { productsArr } from "../constant";
import addToCartHandler from "../Helpers/addToCartHandler";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import './Body.css'
const Product = () => {
    const params = useParams();
    const product = findProduct(productsArr , params.productId)[0];
    // console.log(product);
    const cartCtx = useContext(CartContext);
   
    return (
        <div className="product-details">
            <div className="d-flex m-1 flex-column">
                <img src={product.imageUrl} alt="product-img"></img>
                <button onClick={() => addToCartHandler(product.id , cartCtx)} 
                className="btn btn-primary mt-2">Add to cart</button>
            </div>
            <div className="product-container">
                <h2>{product.title}</h2>
                <p style={{fontWeight:"500"}} className="text-success fs-5"><i>Special price</i></p>
                <h3>Rs. {product.price} </h3>
                <span>{product.ratings}⭐</span>
            </div>
        </div>
    );
}
export default Product;