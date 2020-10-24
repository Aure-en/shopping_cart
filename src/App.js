import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Homepage from "./components/Homepage"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import ShopDetails from "./components/ShopDetails"
import './styles/main.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/shop/:id" component={ShopDetails} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
