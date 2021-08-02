import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
	return (
		<div className="cart-item">
			<img src={item.imageUrl} alt={item.name}/>
			<div className="item-details">
				<span className="name">{item.name}</span>
				<span className="price">{`${item.quantity} x ₹${item.price*80}`}</span>
			</div>
		</div>
	);
};


export default CartItem;
