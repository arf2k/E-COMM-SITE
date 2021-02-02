import "./App.css";
import Homepage from "./pages/homepage/Homepage.js";
import "./components/menu-item/MenuItem";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Header from "./components/header/Header.js";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp.js"

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path='/signin' component={SignInSignUp}/>
        <Homepage />
      </Switch>
    </div>
  );
}

export default App;
