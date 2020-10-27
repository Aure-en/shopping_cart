import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import menu from '../data/menu'
import Menu from './Menu'
import styles from '../styles/layout/cart.module.scss'

function Cart( { cart, updateCart } ) {

  const [order, setOrder] = useState(cart)

  const removeFromCart = (menuId) => {
    setOrder((prevOrder) => {
      const newOrder = {...prevOrder}
      delete newOrder[menuId]
      return newOrder
    })
  }

  const calculatePrice = (cart) => {
    let price = 0;
    for (const item in cart) {
      const menuItem = menu.find(menuItem => menuItem.id === +item)
      price += +(menuItem.price.match(/\d+/)) * cart[item]
    }
    return price
  }

  useEffect(() => {
    updateCart(order)
  })

  if (Object.keys(cart).length === 0) {
    return (
      <main className={styles.cart}>
        <div className={`box ${styles.content}`}>
          <h1>Order</h1>
          <span className="decoration">⬧</span>
          <div className="text-center">Sorry, it appears that your cart is empty. <br/>
          Feel free to take a look at our menu and come back later.</div>
          <Link to="/shop" className="btn btn--text">Menu</Link>
        </div>
      </main>
    )

  } else {

    return (
      <main className={styles.cart}>
        <div className={`box ${styles.content}`}>
          <h1>Order</h1>
          <span className="decoration">⬧</span>
            <ul>
              {
                Object.keys(order).map( (itemId) => {
                  const item = menu.find(menuItem => menuItem.id === +itemId)

                  return (
                    <li className={styles.item} key={item.id}>
                        <Menu 
                          name={item.name} 
                          price={item.price} 
                          description={item.description} 
                          image={item.image} 
                          qty={order[itemId]} 
                          id={item.id} 
                          cart={cart}
                          updateCart={updateCart}
                          changeCart={() => removeFromCart(itemId)}
                          preview={true} />
                    </li>
                  )
                })
              }
            </ul>
          <div className={styles.total}>Order Total: {calculatePrice(cart)}$</div>
        </div>
        <Link to="/" className="btn btn--text">Confirm</Link>
      </main>
    )
  }
}

export default Cart
