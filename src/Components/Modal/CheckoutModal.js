import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './CheckoutModal.css';
import CartContext from "../../store/cart-context";


const Backdrop = (props) => {
    return <div className='backdrop'  onClick={props.exitCart} />;
};

const ModalOverlay = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    let numberOfItems = 0;
    for (let i = 0; i < cartCtx.items.length; i++) {
        numberOfItems += cartCtx.items[i]['amount'];
    }

    return (
        <div className='CheckoutModal' >
            <header >
                <h2>Your cart</h2>
            </header>

            {cartCtx.items.map((item) => <div>
            <span>{item['name']}</span>
            <span>Quantity</span>
            <span>{item['amount']}</span>
                    </div>)}
            <div>Total number of items: {numberOfItems}</div>
            <div>Total price: {totalAmount}</div>
            <footer >
                <div onClick={props.onConfirm} className='checkoutfooter'>Submit order</div>
            </footer>
        </div>
    );
};

const CheckoutModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                // <Backdrop onConfirm={props.onConfirm} />,
                <Backdrop exitCart={props.exitCartHandler} />,

                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default CheckoutModal;