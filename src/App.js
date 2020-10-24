import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Homepage from "./components/Homepage"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import ShopDetails from "./components/ShopDetails"
import './styles/main.scss'

function App() {

  const [cart, setCart] = useState({})

  const updateCart = (newCart) => {
    setCart(newCart)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" render={(props) => <Shop cart={cart} updateCart={updateCart} {...props} />} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/shop/:id" render={(props) => <ShopDetails cart={cart} updateCart={updateCart} {...props} />} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
