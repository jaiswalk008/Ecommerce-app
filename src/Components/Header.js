import '../App.css'
import Cart from './Cart/Cart';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Header = (props) =>{

    return (
        <div>
            <nav className='bg-dark'>
                <div className="d-flex">
                    <ul className="header-list">
                        <li><NavLink activeClassName="active" to="/home">HOME</NavLink></li>
                        <li><NavLink activeClassName="active" to="/store">STORE</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                        <li><NavLink activeClassName="active" to="/login">LOGIN</NavLink></li>
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