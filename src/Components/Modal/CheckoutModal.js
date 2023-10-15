import React from 'react';
import ReactDOM from 'react-dom';
import './CheckoutModal.css';


const Backdrop = (props) => {
    return <div className='backdrop'  onClick={props.exitCart} />;
};

const ModalOverlay = (props) => {
    return (
        <div className='CheckoutModal' >
            <header >
                <h2>Your cart</h2>
            </header>
            <div>Pizza: {props.cartContents['Pizza']}</div>
            <div>Burgers: {props.cartContents['Burger']}</div>
            <div>Fries: {props.cartContents['Fries']}</div>
            <div>Soda: {props.cartContents['Soda']}</div>
            <div>Total price: {props.total}</div>
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
                <ModalOverlay
                    cartContents = {props.cartContents}
                    total = {props.total}
                    // message={props.message}
                    // onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default CheckoutModal;