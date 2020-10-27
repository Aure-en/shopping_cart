import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/layout/header.module.scss'
import logo from '../assets/rhodes_logo.png'

function Nav({ cart }) {

  const cartItems = (cart) => {
    let total = 0
    for (const item in cart) {
      total += +cart[item]
    }
    return total
  }

  return (
    <header className={styles.header}>
      <Link to="/"><img src={logo} alt="Rhodes Logo" /></Link>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <Link to="/" className="link--secondary"><li className={styles.nav__link}>Home</li></Link>
          <Link to="/shop" className="link--secondary"><li className={styles.nav__link}>Menu</li></Link>
          <Link to="/cart" className="link--secondary"><li className={styles.nav__link}>Order ({cartItems(cart)})</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
