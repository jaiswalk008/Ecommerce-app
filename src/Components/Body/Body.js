import { productsArr } from "../constant";
import Card from "./Card";
import "./Body.css"
const Body = props =>{
    return (
        <>
            <div >
                <h3 className="text-center ">Music</h3>
                <div className="music">
                {productsArr.map((element) => {
                   return  <Card key={Math.random()} element={element}/>
                })}

                </div>
            </div>
            <div >
                <h3 className="text-center ">Merch</h3>
                <div className="merch">
                {productsArr.map((element) => {
                   return  <Card key={Math.random()} element={element}/>
                })}

                </div>
            </div>
            <div className="text-center m-3"><button className="btn text-dark  btn-secondary">See the cart</button></div>
        </>
    )
}
export default Body;