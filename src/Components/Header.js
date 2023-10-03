import shoppingcartbutton from "../../src/Images/shoppingcartbutton.png";

import "./Header.css";

function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function Header(props){
    return( <header className="Header">
        <p className='Left'>
           Food Order App
        </p>
        <div className='Right'> Checkout {currencyFormat(props.shoppingCartTotal)}
        <img src={shoppingcartbutton} className={"shoppingImage"} alt={'a shopping cart'}/>
        </div>
    </header>);
}

export default Header;