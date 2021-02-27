import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton.js";
import CartItem from "../cart-item/CartItem.js";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors.js";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions.js"

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton onClick={() => {
           history.push("/checkout");
          dispatch(toggleCartHidden());
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
