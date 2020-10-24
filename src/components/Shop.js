import React, { useState, useEffect } from 'react'
import menu from '../data/menu'
import Menu from './Menu'

function Shop({ cart, updateCart }) {

  const [order, setOrder] = useState(cart)

  const addToCart = (menu) => {
    if (!([menu.id] in order)) {
      setOrder({...order, [menu.id]: +menu.quantity})
    } else {
      setOrder({...order, [menu.id]: order[menu.id] + +menu.quantity })
    }
  }

  useEffect(() => updateCart(order))

  return (
    <ul>
      {
        menu.map(
          item => (
            <li className="menu" key={item.id}>
              <Menu name={item.name} price={item.price} description={item.description} image={item.image} id={item.id} addToCart={addToCart} />
            </li>
          )
        )
      }
    </ul>
  )
}

export default Shop
