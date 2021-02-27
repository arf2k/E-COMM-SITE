import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon.js";
import CartDropdown from "../cart-dropdown/CartDropdown.js";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors.js";
import { selectCurrentUser } from "../../redux/user/userSelector.js";
import { signOutStart } from "../../redux/user/userActions.js"

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./HeaderStyles.js"

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
