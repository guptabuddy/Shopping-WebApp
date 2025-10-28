import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
	return (
		<CartContextProvider>
			{/* For making this Context available to all components we used the Context in the App component */}
			{/* For making the Context work for older versions of React (earlier than React19), we had to use the "Provider" property*/}

			{/* <Header cart={shoppingCart} onUpdateCartItemQuantity={handleUpdateCartItemQuantity} /> */}
			<Header />
			<Shop>
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						{/* <Product {...product} onAddToCart={handleAddItemToCart} /> */}
						<Product {...product} />
					</li>
				))}
			</Shop>
		</CartContextProvider>
	);
}

export default App;
