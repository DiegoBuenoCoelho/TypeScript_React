import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import { Provider } from "react-redux";
import { appStore } from "./store/store.ts";

function App() {
	return (
		<Provider store={appStore}>
			<Header />
			<Shop>
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</Provider>
	);
}

export default App;
