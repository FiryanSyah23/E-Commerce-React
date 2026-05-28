import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import { products } from "../../../starting-code/data/products";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<div className="home-page">
				<div className="products-grid">
					{products.map((item) => (
						<div className="product-container" key={item.id}>
							<div className="product-image-container">
								<img className="product-image" src={item.image} />
							</div>

							<div className="product-name limit-text-to-2-lines">{item.name}</div>

							<div className="product-rating-container">
								<img className="product-rating-stars" src={`images/ratings/rating-${10 * item.rating.stars}.png`} />
								<div className="product-rating-count link-primary">{item.rating.count}</div>
							</div>

							<div className="product-price">${parseFloat(item.priceCents / 100).toFixed(2)}</div>

							<div className="product-quantity-container">
								<select>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div className="product-spacer"></div>

							<div className="added-to-cart">
								<img src="images/icons/checkmark.png" />
								Added
							</div>

							<button className="add-to-cart-button button-primary">Add to Cart</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
