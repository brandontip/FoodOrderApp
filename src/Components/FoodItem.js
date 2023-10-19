import "./FoodItem.css"
import {useRef} from "react";
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import burgerImage from "../../src/Images/burger.jpg";
import fryImage from "../../src/Images/fries.JPG";
import pizzaImage from "../../src/Images/Pizza.jpg";
import sodaImage from "../../src/Images/soda.jpg";

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

    let image = pizzaImage;
    if (props.name === 'Burger'){
        image = burgerImage;
    }
    else if (props.name === 'Fries'){
        image = fryImage;
    }
    else if (props.name === 'Soda'){
        image = sodaImage;
    }

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
            <img src={image} className='menuImage' alt={'a shopping cart'} onClick={props.checkoutHandler}/>
            <div className='foodInputStack'>
            <label >Amount</label>
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
            <button className='foodButton'>Add to Cart</button>
            </div>
        </form>
    )
}

export default FoodItem;