import './App.css';
import Homepage from "./pages/homepage/Homepage.js"
import "./components/menu-item/MenuItem"
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop.js'





function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
      <Homepage/>
      </Switch> 
    </div>
  );
}


export default App;
