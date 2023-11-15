import '../App.css'
import Cart from './Cart/Cart';
const Header = () =>{

    return (
        <div>
            <nav className='bg-dark'>
                <div className="d-flex">
                    <ul className="header-list">
                        <li>HOME</li>
                        <li>STORE</li>
                        <li>ABOUT</li>
                    </ul>
                    <Cart/>
                </div>
                
            </nav>
           <div className='heading'><h1 >The Generics</h1></div>
        </div>
    )
}
export default Header;