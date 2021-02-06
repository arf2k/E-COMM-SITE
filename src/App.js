import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/Homepage.js";
import "./components/menu-item/MenuItem";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Header from "./components/header/Header.js";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp.js";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  // open subscription between app & firebase app- when changes occur on firebase related to this app firebase sends message saying user changed - they'll give us this user so we dont have to manually check if state has changed as long as app component is mounted - also have to close subscritpions when it unmounts so no memory leaks

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
          <Homepage />
        </Switch>
      </div>
    );
  }
}

export default App;
