import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/Homepage.js";
import "./components/menu-item/MenuItem";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Header from "./components/header/Header.js";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp.js";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils.js";
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/userActions.js"
import { selectCurrentUser } from "./redux/user/userSelector.js";
import {createStructuredSelector} from 'reselect'

class App extends React.Component {


  unsubscribefromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot((snapShot) => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
          });
          console.log(setCurrentUser)
        });
      } else {
        setCurrentUser(userAuth);
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
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.currentUser? (
            <Redirect to="/" /> ) : (
          <SignInSignUp/>)} />
          <Homepage />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
