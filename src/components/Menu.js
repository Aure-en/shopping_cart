import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/layout/menu.module.scss'
import stylesCart from '../styles/layout/cart.module.scss'
import useOrderQuantity from '../hooks/useOrderQuantity'

function Menu({ name, price, description, image, id, changeCart, qty }) {

  const [quantity, changeQuantity, incrementQuantity, decrementQuantity, validateQuantity] = useOrderQuantity(qty)

  return (
    <div className={`box box--borderless ${styles.menu}`}>
      <Link to={`shop/${id}`}>
        <div className={`${styles.menu__image} ${stylesCart.menu__image}`}>
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

      <button className={`${styles.menu__submit} ${stylesCart.menu__delete} btn--big`} type="button" onClick={() => changeCart({ id, quantity })}>+</button>
    </div>
  )
}

export default Menu
