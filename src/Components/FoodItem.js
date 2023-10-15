import "./FoodItem.css"
import {useState} from "react";

function FoodItem(props){
    const [quantity, setQuantity] = useState(0);

    const QuantityUpdateHandler = (event) => {
        event.preventDefault();
        if(event.target.value < 0){return;}
        setQuantity(event.target.value);
        props.onCartUpdate(props.name, event.target.value);
    }

    return(
        <div className="FoodItem">
            <h3 className='Left'>{props.name}</h3>
            <p className='Center'>{props.description}</p>
            <p className="Right">${props.price}</p>
            <input value={quantity} type='number' onChange={QuantityUpdateHandler} className='foodInputField'></input>
        </div>
    )
}

export default FoodItem;