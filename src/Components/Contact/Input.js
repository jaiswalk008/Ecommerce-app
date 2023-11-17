const Input = (props) =>{
    return (
        <>
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <input value={props.value} onChange={props.onChange} className="form-control" type={props.type} id={props.id} name={props.name}  />

        </>
    )
}
export default Input;