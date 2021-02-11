import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// ReactComponent import name is syntax telling create react app to render as svg and not filename
import { auth } from '../../firebase/Firebase.utils.js'
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/CartIcon.js"

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        }
         <CartIcon/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
