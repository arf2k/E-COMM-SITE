import "./App.css";
import React, { useEffect } from "react";
import Homepage from "./pages/homepage/Homepage.js";
import "./components/menu-item/MenuItem";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop"
import CheckoutPage from "./pages/checkout/CheckoutPage.js";
import Header from "./components/header/Header.js";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp.js";

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector.js";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/userActions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop}/>
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Homepage />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
