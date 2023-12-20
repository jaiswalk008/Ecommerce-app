import {useContext} from 'react';
import '../App.css'
import Cart from './Cart/Cart';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import { AuthContext } from './Context/AuthContext';
const Header = (props) =>{
    const authCtx = useContext(AuthContext);
    // const [email,setEmail] = useState(authCtx.);
    // const [showLogin , setShowLogin] = useState(!!authCtx.token);
    
    // useEffect(() =>{
    //     setShowLogin(prevState=> !prevState);   
    // },[authCtx.token]);
    // const history = useHistory();
    console.log(!!authCtx.token)
    return (
        <div>
            <nav className='bg-dark'>
                <div className="d-flex">
                    <ul className="header-list">
                        <li><NavLink activeClassName="active" to="/home">HOME</NavLink></li>
                        <li><NavLink activeClassName="active" to="/store">STORE</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                        {(authCtx.token.length>0)? <li><button id='logout' className='btn text-light' onClick={authCtx.logout}>LOGOUT</button></li> :
                        <li><NavLink activeClassName="active" to="/login">LOGIN</NavLink></li> 
                        }
                        <li><NavLink activeClassName="active" to="/contactus">CONTACT</NavLink></li>
                    </ul>
                    <Cart/>
                </div>
                
            </nav>
           <div className='heading'><h1 >The Generics</h1></div>
        </div>
    )
}
export default Header;