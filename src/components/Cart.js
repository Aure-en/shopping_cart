import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../data/menu'
import MenuPreview from './MenuPreview'
import styles from '../styles/layout/cart.module.scss'

function Cart( { cart, updateCart } ) {

  const calculatePrice = (cart) => {
    let price = 0;
    for (const item in cart) {
      const menuItem = menu.find(menuItem => menuItem.id === +item)
      price += +(menuItem.price.match(/\d+/)) * cart[item]
    }
    return price
  }

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
                Object.keys(cart).map( (itemId) => {
                  const item = menu.find(menuItem => menuItem.id === +itemId)

                  return (
                    <li className={styles.item} key={item.id}>
                        <MenuPreview
                          name={item.name} 
                          price={item.price} 
                          description={item.description} 
                          image={item.image} 
                          qty={cart[itemId]} 
                          id={item.id} 
                          cart={cart}
                          updateCart={updateCart}
                        />
                    </li>
                  )
                })
              }
            </ul>
          <div className={styles.total}>Order Total: ${calculatePrice(cart)}</div>
        </div>
        <div className={styles.buttons}>
          <Link to="/shop" className="btn btn--text">Back</Link>
          <Link to="/" className="btn btn--text">Confirm</Link>
        </div>
      </main>
    )
  }
}

export default Cart
