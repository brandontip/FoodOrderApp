import FoodItem from "./FoodItem";
import "./Menu.css";




function Menu(props){
    return(
        <div className="Menu">
            <h1>Menu</h1>
            {props.food.map((food) => <FoodItem name={food.name} price={food.price} description={food.description} onCartUpdate={props.onCartUpdate}></FoodItem>)}
        </div>
    )
}

export default Menu;