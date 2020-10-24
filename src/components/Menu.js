import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/layout/menu.module.scss'

function Menu({ name, price, description, image, id, addToCart, qty }) {

  const [quantity, setQuantity] = useState(qty)

  const changeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <div className="box">
      <Link to={`shop/${id}`}>
        <div className={styles.menu__image}>
          <img src={image.src} alt={image.alt} className/>
        </div>
        <h2 className="menu__name">{name}</h2>
      </Link>
      <div className="menu__description">{description}</div>
      <div className="menu__price">{price}</div>
      <div className="menu__order">
        Order for <input type="number" min="0" value={quantity} onChange={changeQuantity}/>
        <button type="button" onClick={() => addToCart({ id, quantity })}>+</button>
      </div>
    </div>
  )
}

export default Menu
