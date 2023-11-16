const TourList = (props) =>{
   return (
    <>
        <div className="d-flex justify-content-around align-items-center">
            <span className="date">{props.date}</span>
            <span className="city"> {props.city}</span>
            <span className="desc">{props.desc}</span>
            <button className="btn btn-primary">Buy Tickets</button>
        </div>
        <hr/>
    </>
   )
}
export default TourList;