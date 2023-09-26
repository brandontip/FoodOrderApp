import shoppingcartbutton from "../../src/Images/shoppingcartbutton.png";

import "./Header.css";

function Header(){
    return( <header className="Header">
        <p className='Left'>
           Food Order App
        </p>
        <p className='Right'> Checkout </p>
        <img src={shoppingcartbutton} className="shoppingImage" />
    </header>);
}

export default Header;