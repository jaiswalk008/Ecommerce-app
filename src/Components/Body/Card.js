const Card = ({element}) => {
    return (
        <div style={{width:"300px"}} className="d-flex m-3 justify-content-center flex-column">
            <div className="text-center">
            <h3>{element.title}</h3>
            <img className="card-image"  src={element.imageUrl}
            alt="item"></img>
            </div>
            <div className="m-2">
                <strong className="pt-2">Rs. {element.price}</strong>
                <button className="btn  btn-primary float-end">Add to cart</button>
            </div>
        </div>
    )
}
export default Card;