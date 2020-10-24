import React, { useState, useEffect } from 'react'
import menu from '../data/menu'
import Menu from './Menu'

function Cart( {cart, updateCart} ) {

  const [order, setOrder] = useState(cart)

  const removeFromCart = (menuId) => {
    setOrder((prevOrder) => {
      const newOrder = {...prevOrder}
      delete newOrder[menuId]
      return newOrder
    })
  }

  const modifyCart = (menu) => {
    setOrder({...order, [menu.id]: +menu.quantity})
  }

  useEffect(() => {
    updateCart(order)
  })

  return (
    <div>
      {
        Object.keys(order).map( (itemId) => {
          const item = menu.find(menuItem => menuItem.id === +itemId)

          return (
            <li className="menu" key={item.id}>
                <Menu name={item.name} price={item.price} description={item.description} image={item.image} qty={order[itemId]} id={item.id} addToCart={modifyCart} />
                <button type="button" onClick={() => removeFromCart(itemId)}>-</button>
            </li>
          )
        })
      }
    </div>
  )
}

export default Cart
