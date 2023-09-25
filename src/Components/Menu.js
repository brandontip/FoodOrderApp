import FoodItem from "./FoodItem";
import "./Menu.css";

const mockFoodData = [
    {name: "Pizza", price: 10.99, description: "Savor the extraordinary flavors of our mouthwatering pizza! Crafted with a medley of premium ingredients and baked to perfection, it's the epitome of cheesy, savory delight."},
    {name: "Burger", price: 5.99, description: "Embark on a tantalizing journey with our signature burger. A culinary masterpiece that combines juicy, flame-grilled goodness with fresh, crisp toppings, all nestled between a soft, toasted bun."},
    {name: "Fries", price: 2.99, description: "Indulge in a plate of golden, crispy fries that will transport your taste buds to a realm of crunchy perfection. Each bite is a symphony of flavors and textures."},
    {name: "Soda", price: 1.99, description: "Its got the bubbles dawg"}
]


function Menu(){
    return(
        <div className="Menu">
            <h1>Menu</h1>
            {mockFoodData.map((food) => <FoodItem name={food.name} price={food.price} description={food.description}></FoodItem>)}
        </div>
    )
}

export default Menu;