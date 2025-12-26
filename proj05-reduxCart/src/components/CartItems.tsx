import { useEffect, useState } from "react";
import { addToCart, CartItem, removeFromCart } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const arItems = useCartSelector((latestState) => latestState.cart.items);
	const fnDispatch = useCartDispatch();

	useEffect(() => {
		setCartItems(arItems);
	}, [arItems]);

	const handleRemoveFromCart = (itemId: string) => {
		const myAction = removeFromCart(itemId);
		fnDispatch(myAction);
	};

	const handleAddToCart = (item: CartItem) => {
		// const myAction = addToCart({ id: item.id, title: item.title, price: item.price });
		const myAction = addToCart(item);
		fnDispatch(myAction);
	};

	console.warn({ cartItems });

	const formattedTotalPrice = cartItems.reduce(
		(currentVal, thisProduct) => currentVal + thisProduct.qtty * thisProduct.price,
		0
	);

	return (
		<div id="cart">
			{cartItems.length === 0 && <p>No items in cart!</p>}
			{cartItems.length > 0 && (
				<ul id="cart-items">
					{cartItems.map((item) => {
						const formattedPrice = `$${item.price.toFixed(2)}`;

						return (
							<li key={item.id}>
								<div>
									<span>{item.title}</span>
									<span> ({formattedPrice})</span>
								</div>
								<div className="cart-item-actions">
									<button onClick={() => handleRemoveFromCart(item.id)}>-</button>
									<span>{item.qtty}</span>
									<button onClick={() => handleAddToCart(item)}>+</button>
								</div>
							</li>
						);
					})}
				</ul>
			)}

			<p id="cart-total-price">
				Cart Total: <strong>{formattedTotalPrice.toFixed(2)}</strong>
			</p>
		</div>
	);
}
