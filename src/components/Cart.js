import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import menu from '../data/menu'
import Menu from './Menu'
import styles from '../styles/layout/cart.module.scss'
import Overview from './Overview'

function Cart( { cart, updateCart } ) {

  const [order, setOrder] = useState(cart)

  const removeFromCart = (menuId) => {
    setOrder((prevOrder) => {
      const newOrder = {...prevOrder}
      delete newOrder[menuId]
      return newOrder
    })
  }

  useEffect(() => {
    updateCart(order)
  })

  return (
    <main className={styles.cart}>
      <h1 className='heading'>Order</h1>
      <ul>
        {
          Object.keys(order).map( (itemId) => {
            const item = menu.find(menuItem => menuItem.id === +itemId)

            return (
              <li className="menu" key={item.id}>
                  <Menu name={item.name} price={item.price} description={item.description} image={item.image} qty={order[itemId]} id={item.id} changeCart={() => removeFromCart(itemId)} />
              </li>
            )
          })
        }
      </ul>
      <Overview cart={cart} />
    </main>
  )
}

export default Cart
