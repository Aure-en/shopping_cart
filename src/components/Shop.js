import React from 'react'
import menu from '../data/menu'
import Menu from './Menu'
import styles from '../styles/layout/shop.module.scss'

function Shop({ cart, updateCart }) {

  return (
    <main className={styles.shop}>
      <h1 className='heading'>Menu</h1>
      <ul className={styles.list}>
        {
          menu.map(
            item => (
              <li className={`box box--borderless ${styles.menu}`} key={item.id}>
                <Menu
                  name={item.name} 
                  price={item.price} 
                  description={item.description} 
                  image={item.image} 
                  qty={cart[item.id] || 0} 
                  id={item.id}
                  cart={cart}
                  updateCart={updateCart}/>
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}

export default Shop
