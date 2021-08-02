import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import { selectCartItem, selectCartTotal } from "../../redux/cart/cart.select";

import "./checkout.styles.scss";

const CheckOutPage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => {
                return <CheckOutItem key={cartItem.id} item={cartItem}/>
            })}
            <div className="total">
                <span>TOTAL:{` ₹${total*80}`}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItem,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);