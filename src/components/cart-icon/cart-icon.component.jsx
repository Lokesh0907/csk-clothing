import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { selectCartItemCount } from "../../redux/cart/cart.select";
import { createStructuredSelector } from "reselect";

const CartIcon =({totalQuantity, toggleCartHidden}) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{totalQuantity}</span>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => {
            dispatch(toggleCartHidden());
        }
    }
}

const mapStateToProps = createStructuredSelector({totalQuantity:selectCartItemCount})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);