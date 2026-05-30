import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import CheckoutPage from "./pages/checkout/CheckOut";
import OrderPages from "./pages/orders/orders";
import { useEffect } from "react";
import axios from "axios";

function App() {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		axios.get("/api/cart-items?expand=product").then((response) => {
			setCart(response.data);
		});
	}, []);

	return (
		<Routes>
			<Route index element={<HomePage cart={cart} />} />
			<Route path="checkout" element={<CheckoutPage cart={cart} />} />
			<Route path="orders" element={<OrderPages />} />
		</Routes>
	);
}

export default App;
