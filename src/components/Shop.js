import React, { useState, useEffect } from 'react'
import menu from '../data/menu'
import Menu from './Menu'
import styles from '../styles/layout/shop.module.scss'

function Shop({ cart, updateCart }) {

  const [order, setOrder] = useState(cart)

  const addToCart = (menu) => {
    setOrder({...order, [menu.id]: +menu.quantity})
  }

  useEffect(() => updateCart(order))

  return (
    <main className={styles.shop}>
      <h1 className='heading'>Menu</h1>
      <ul>
        {
          menu.map(
            item => (
              <li className="menu" key={item.id}>
                <Menu name={item.name} price={item.price} description={item.description} image={item.image} qty={cart[item.id] || 0} id={item.id} changeCart={addToCart} />
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}

export default Shop
