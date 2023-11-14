import '../App.css'
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
                    <span className='text-end p-2 fs-4 w-100 text-light'>Cart🛒</span>
                </div>
                
            </nav>
           <div className='heading'><h1 >The Generics</h1></div>
        </div>
    )
}
export default Header;