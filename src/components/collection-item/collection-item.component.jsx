import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem}) => {
	return (
		<div className="collection-item">
			<div
				style={{ backgroundImage: `url(${item.imageUrl})` }}
				className="image"
			></div>
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="price">{"₹"+(item.price*80)}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted={true}>ADD TO CART</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addItem: item => {
			dispatch(addItem(item))
		}
	}
}

export default connect(null,mapDispatchToProps)(CollectionItem);
