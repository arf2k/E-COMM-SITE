import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHIdden } from "../../redux/cart/cartActions.js";
import { connect } from "react-redux";

const CartIcon = ({toggleCartHIdden}) => (
  <div className="cart-icon" onClick={toggleCartHIdden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHIdden: () => dispatch(toggleCartHIdden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
