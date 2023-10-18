import "./FoodItem.css"
import {useRef} from "react";
import { useContext } from 'react';
import CartContext from '../store/cart-context';

function FoodItem(props){
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef();

    const addToCartHandler = amount => {
        cartCtx['addItem']({
            id: props.id+Date.now(),
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        addToCartHandler(enteredAmount);
        amountInputRef.current.value = '';
    };

    return(
        <form className="FoodItem" onSubmit={submitHandler}>
            <div className='foodSummary'>
                <h3 className='Name'>{props.name}</h3>
                <p className='Description'>{props.description}</p>
                <p className="Price">${props.price}</p>
            </div>
            <input  ref={amountInputRef}
                    label='Amount'
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                    } }
                    className='foodInputField'></input>
        </form>
    )
}

export default FoodItem;