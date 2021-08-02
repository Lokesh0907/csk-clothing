import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckOutItem = ({item, removeItem , clearItem, addItem}) => {

    const {name, quantity, price, imageUrl} = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItem(item)}>&#10094;</div>
                {quantity}
                <div className="arrow" onClick={()=> addItem(item)}>&#10095;</div>
            </span>
            <span className="price">{`₹${price*80}`}</span>
            <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: cartItem => {
            dispatch(removeItem(cartItem));
        },
        addItem: cartItem => {
            dispatch(addItem(cartItem));
        },
        clearItem: cartItem => {
            dispatch(clearItem(cartItem))
        }
    }
}

export default connect(null,mapDispatchToProps)(CheckOutItem);