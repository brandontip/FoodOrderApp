import FoodItem from "./FoodItem";
import "./Menu.css";




function Menu(props){
    return(
        <div className="Menu">
            <h1 className='MenuHeader'>Menu</h1>
            <div className='MenuItems'>
            {props.food.map((food, index) => <FoodItem key={food.name} name={food.name} price={food.price} description={food.description} onCartUpdate={props.onCartUpdate}></FoodItem>)}
            </div>
        </div>
    )
}

export default Menu;