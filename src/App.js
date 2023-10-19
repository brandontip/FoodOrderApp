import './App.css';
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import {useState} from "react";
import CheckoutModal from "./Components/Modal/CheckoutModal";
import CartProvider from './store/CartProvider';


const mockFoodData = [
    {name: "Pizza", price: 10.99, description: "Savor the extraordinary flavors of our mouthwatering pizza! Crafted with a medley of premium ingredients and baked to perfection."},
    {name: "Burger", price: 5.99, description: "Embark on a tantalizing journey with our signature burger. A culinary masterpiece that combines juicy, flame-grilled goodness with fresh toppings."},
    {name: "Fries", price: 2.99, description: "Indulge in a plate of golden, crispy fries that will transport your taste buds to a realm of crunchy perfection."},
    {name: "Soda", price: 1.99, description: "Its got the bubbles dawg"},
]



function App() {
    const [checkingOut, setCheckingOut] = useState(false);
    const CheckoutHandler = () => {setCheckingOut(true)}

    const ExitCartHandler = () => {setCheckingOut(false)}


    return (
    <CartProvider>
    <Header checkoutHandler={CheckoutHandler}></Header>
    <Menu food={mockFoodData} ></Menu>
        {checkingOut &&    <CheckoutModal exitCartHandler={ExitCartHandler}> </CheckoutModal>}
        <div>{checkingOut.toString()}</div>
    </CartProvider>
  );
}

export default App;
