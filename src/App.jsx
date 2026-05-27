import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import CheckoutPage from "./pages/checkout/CheckOut";
import OrderPages from "./pages/orders/orders";
function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="checkout" element={<CheckoutPage />} />
			<Route path="orders" element={<OrderPages />} />
		</Routes>
	);
}

export default App;
