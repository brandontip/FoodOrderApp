import './App.css';
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import {useState} from "react";
import CheckoutModal from "./Components/Modal/CheckoutModal";
import CartProvider from './store/CartProvider';

const mockFoodData = [
    {name: "Pizza", price: 10.99, description: "Savor the extraordinary flavors of our mouthwatering pizza! Crafted with a medley of premium ingredients and baked to perfection, it's the epitome of cheesy, savory delight."},
    {name: "Burger", price: 5.99, description: "Embark on a tantalizing journey with our signature burger. A culinary masterpiece that combines juicy, flame-grilled goodness with fresh, crisp toppings, all nestled between a soft, toasted bun."},
    {name: "Fries", price: 2.99, description: "Indulge in a plate of golden, crispy fries that will transport your taste buds to a realm of crunchy perfection. Each bite is a symphony of flavors and textures."},
    {name: "Soda", price: 1.99, description: "Its got the bubbles dawg"},
]



function App() {
    const [checkingOut, setCheckingOut] = useState(false);
    const CheckoutHandler = () => {setCheckingOut(true)}

    const CartUpdateHandler = (item, quantity) => {UpdateCartContents(prev=>{return {...prev, [item]: quantity}})}

    const ExitCartHandler = () => {setCheckingOut(false)}

    const [shoppingCartContents, UpdateCartContents]= useState({Pizza: 0, Burger: 0, Fries: 0, Soda: 0});
    const CalculateTotal = (cartContents, foodData) => {
        let num= cartContents.Pizza * foodData[0].price + cartContents.Burger * foodData[1].price + cartContents.Fries * foodData[2].price + cartContents.Soda * foodData[3].price;
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    return (
    <CartProvider>
    <Header shoppingCartTotal={CalculateTotal(shoppingCartContents,mockFoodData)} checkoutHandler={CheckoutHandler}></Header>
    <Menu food={mockFoodData} ></Menu>
        {checkingOut &&    <CheckoutModal exitCartHandler={ExitCartHandler}> </CheckoutModal>}
        <div>{checkingOut.toString()}</div>
    </CartProvider>
  );
}

export default App;
