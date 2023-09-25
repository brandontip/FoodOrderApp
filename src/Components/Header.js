import shoppingcartbutton from "C:\\Users\\btipp\\WebstormProjects\\foodorderapp\\src\\Images\\shoppingcartbutton.png";

import "./Header.css";

function Header(){
    return( <header className="Header">
        <p className='Left'>
           Food Order App
        </p>
        <p className='Right'> Checkout </p>
        <img src={shoppingcartbutton} className="shoppingImage" />
        {/*<a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*>*/}
        {/*    Learn React*/}
        {/*</a>*/}
    </header>);
}

export default Header;