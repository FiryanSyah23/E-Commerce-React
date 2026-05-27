import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import CheckoutPage from "./pages/checkout/CheckOut";
function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="checkout" element={<CheckoutPage />} />
		</Routes>
	);
}

export default App;
