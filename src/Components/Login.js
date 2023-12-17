import { useState ,useCallback,useContext } from 'react';
import {useHistory} from 'react-router-dom';
import './Contact/ContactUs.css';
import Input from './Contact/Input';
import axios from 'axios';
import { AuthContext } from './Context/AuthContext';
const Login = (props) =>{
    const authCtx = useContext(AuthContext);
   

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const emailChangeHandler = (e) => setEmail(e.target.value);
    const passwordChangeHandler = (e) => setPassword(e.target.value);
    const formReset = useCallback(() =>{
        setEmail('');
        setPassword('');
    },[])
    const history = useHistory();
    const onSubmitHandler  = async (e) =>{
        e.preventDefault();
        const userDetails={
            email:email,
            password:password
        }
        // console.log(details);
       try {
        
        const response  = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.REACT_APP_API_KEY,
        userDetails);
        localStorage.setItem('email' , userDetails.email);
        console.log(response);
        authCtx.setToken(response.data.idToken)
        history.push('/store');
        formReset();
       } catch (error) {
        // console.log('error')
        setErrorMessage(error.response.data.error.message);
       }
    }
    return (
        <div>
            <h2 className="text-center"> Login</h2>
            <p className='text-center' style={{color:"red"}}>{errorMessage}</p>
            <div className="contact-div container w-50 p-2 mb-4">
                
                <form onSubmit={onSubmitHandler}>
                    
                    <Input type="email" value={email} onChange={emailChangeHandler} label="Email:" id="email" name="email" /> 
                    <Input type="password" value={password} onChange={passwordChangeHandler} label="password:" id="password" name="password" /> 
                    <button className='btn btn-primary w-100 mt-3' type='submit'>Login</button>
                </form>
            </div>
            
        </div>
    )
}
export default Login;