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

    for (const item in newCart) {
      if (newCart[item] === 0) {
        delete newCart[item]
      }
    }
    setCart(newCart)
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" render={(props) => <Shop cart={cart} updateCart={updateCart} {...props} />} />
            <Route exact path="/cart" render={(props) => <Cart cart={cart} updateCart={updateCart} {...props} />} />
            <Route path="/shop/:id" render={(props) => <ShopDetails cart={cart} updateCart={updateCart} {...props} />} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
