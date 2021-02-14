import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton.js";
import CartItem from "../cart-item/CartItem.js";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors.js";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
