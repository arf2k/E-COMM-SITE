import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/Homepage.js";
import "./components/menu-item/MenuItem";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import CheckoutPage from "./pages/checkout/CheckoutPage.js";
import Header from "./components/header/Header.js";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp.js";

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector.js";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribefromAuth = null;

  componentDidMount() {

  }
 

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Homepage />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(App);
