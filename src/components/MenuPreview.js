import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/layout/menu.module.scss'
import stylesCart from '../styles/layout/cart.module.scss'
import useOrderQuantity from '../hooks/useOrderQuantity'
import useCart from '../hooks/useCart'

function Menu({ name, price, description, id, cart, qty, updateCart, changeCart}) {

  const [quantity, changeQuantity, incrementQuantity, decrementQuantity, validateQuantity] = useOrderQuantity(qty)

  const addToCart = useCart(cart, updateCart)[0]

  useEffect(() => {
    addToCart({ id, quantity })
  }, [quantity])

  return (
    <div className={`${styles.menu}`}>
      <Link to={`shop/${id}`}>
        <h2 className="menu__name">{name}</h2>
      </Link>
      
      <div className={styles.menu__description}>{description}</div>
      <div className={styles.menu__price}>{price}</div>

      <div className={styles.menu__order}>
        Order for
          <button className="btn" type="button" onClick={decrementQuantity}>-</button>

          <span 
            className={styles.menu__input} 
            onInput={changeQuantity} s
            onBlur={validateQuantity} 
            contentEditable 
            suppressContentEditableWarning={true}>{quantity}
          </span>

          <button className="btn" type="button" onClick={incrementQuantity}>+</button>

      </div>

      <button className={`${styles.menu__submit} ${stylesCart.menu__delete} btn--big`} type="button" onClick={() => changeCart(id)}>+</button>
    </div>
  )
}

export default Menu
