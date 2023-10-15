import shoppingcartbutton from "../../src/Images/shoppingcartbutton.png";

import "./Header.css";


function Header(props){
    return( <header className="Header">
        <p className='Left'>
           Food Order App
        </p>
        <div className='Right'> Checkout {props.shoppingCartTotal}
        <img src={shoppingcartbutton} className={"shoppingImage"} alt={'a shopping cart'} onClick={props.checkoutHandler}/>
        </div>
    </header>);
}

export default Header;