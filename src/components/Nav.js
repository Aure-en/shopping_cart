import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/layout/header.module.scss'

function Nav() {
  return (
    <header className={styles.header}>
      <img src="" alt="" />
      <nav>
        <ul>
          <Link to="/" className="link--secondary"><li>Home</li></Link>
          <Link to="/shop" className="link--secondary"><li>Order</li></Link>
          <Link to="/cart" className="link--secondary"><li><i className="fas fa-shopping-basket"></i></li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
