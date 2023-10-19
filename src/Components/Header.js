import shoppingcartbutton from "../../src/Images/shoppingcartbutton.png";
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import "./Header.css";


function Header(props){
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    return( <header className="Header">
        <p className='Left'>
           Brandash
        </p>
        <div className='Right'> Checkout {totalAmount}
        <img src={shoppingcartbutton} className={"shoppingImage"} alt={'a shopping cart'} onClick={props.checkoutHandler}/>
        </div>
    </header>);
}

export default Header;