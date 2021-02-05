import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// ReactComponent import name is syntax telling create react app to render as svg and not filename
import { auth } from '../../firebase/Firebase.utils.js'

const Header = ({ currentUser }) => {
  console.log(currentUser)
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
      </div>
    </div>
  );
};

export default Header;
