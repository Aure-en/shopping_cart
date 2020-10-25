import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/layout/menu.module.scss'

function Menu({ name, price, description, image, id, addToCart, qty }) {

  const [quantity, setQuantity] = useState(qty)

  const changeQuantity = (event) => {
    setQuantity(+event.target.textContent)
  }

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity < 1) return
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  const validateQuantity = () => {
    if (quantity < 0) {
      setQuantity(0)
    }
  }

  return (
    <div className={`box box--borderless ${styles.menu}`}>
      <Link to={`shop/${id}`}>
        <div className={styles.menu__image}>
          <img src={image.src} alt={image.alt}/>
        </div>
      </Link>

      <Link to={`shop/${id}`}>
        <h2 className="menu__name">{name}</h2>
      </Link>
      
      <div className={styles.menu__description}>{description}</div>
      <div className={styles.menu__price}>{price}</div>

      <div className={styles.menu__order}>
        Order for
        <button className="btn" type="button" onClick={decrementQuantity}>-</button>
        <span className={styles.menu__input} onInput={changeQuantity} onBlur={validateQuantity} contentEditable suppressContentEditableWarning={true}>{quantity}</span>
        <button className="btn" type="button" onClick={incrementQuantity}>+</button>
      </div>

      <button className={`${styles.menu__submit} btn--big`} type="button" onClick={() => addToCart({ id, quantity })}>+</button>
    </div>
  )
}

export default Menu
