import { useState } from 'react';
import './ContactUs.css';
import Input from './Input';
import { useCallback } from 'react';
const ContactUs = (props) =>{
    const [name,setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');

    const nameChangeHandler = (e) => setName(e.target.value);
    const emailChangeHandler = (e) => setEmail(e.target.value);
    const phoneChangeHandler = (e) => setPhone(e.target.value);
    const formReset = useCallback(() =>{
        setEmail('');
        setName('');
        setPhone('');
    },[])
    const onSubmitHandler  = async (e) =>{
        e.preventDefault();
        const userDetails={
            name:name,
            email:email,
            phone:phone
        }
        // console.log(details);
       try {
        const response  = await fetch('https://react-tutorial-3-default-rtdb.firebaseio.com/users.json',{
            method:"POST",
            body:JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json', 
            },
        })
        const data = await response.json();
        console.log(data);
        formReset();
       } catch (error) {
        console.log(error)
       }
    }
    return (
        <div>
            <h2 className="text-center"> Please enter your details</h2>
            <div className="contact-div container w-50 p-2 mb-4">
                <form onSubmit={onSubmitHandler}>
                    
                    <Input type="text" value={name} onChange={nameChangeHandler}  label="Name:" id="name" name="name" /> 
                    <Input type="email" value={email} onChange={emailChangeHandler} label="Email:" id="email" name="email" /> 
                    <Input type="tel" value={phone} onChange={phoneChangeHandler} label="Phone:" id="phone" name="phone" /> 
                    <button className='btn btn-primary w-100 mt-3' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactUs;