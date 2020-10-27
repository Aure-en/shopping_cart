import React, { useState, useEffect } from 'react'
import useOrderQuantity from '../hooks/useOrderQuantity'
import useCart from '../hooks/useCart'
import menu from '../data/menu'
import styles_menu from '../styles/layout/menu.module.scss'
import styles from '../styles/layout/shopDetails.module.scss'

function ShopDetails( {cart, updateCart, match} ) {

  const [quantity, changeQuantity, incrementQuantity, decrementQuantity, validateQuantity] = useOrderQuantity(cart[+match.params.id])
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: '',
    details: [],
    image: {
      src: '',
      alt: ''
    }
  })

  const addToCart = useCart(cart, updateCart)[0];

  const { name, price, description, image, details, id } = item

  useEffect(() => {
    setItem(menu.filter(item => item.id === +match.params.id)[0])
  }, [match.params.id])

  return (
    <main className={styles.shopDetails}>
      <img className={styles.image} src={image.src} alt={image.alt} />
      <div className={`${styles.content} box`}>
        <h1 className={styles.menu__title}>{name}</h1>
        <span className="decoration">⬧</span>
        <div className={styles.description}>{description}</div>
        <ul className={styles.details}>
          {
            details.map((course, index) => (
            <li className={styles.course} key={index}>
              <div className={styles.course__name}>{course.name}</div>
              <div>{course.description}</div>
              {course.wine && <div className={styles.course__wine}>{course.wine}</div>}
            </li>
            ))
          }
        </ul>
        <div className={styles_menu.menu__price}>{price}</div>
        <div className={styles.menu__order}>
        Order for
        <button className="btn" type="button" onClick={decrementQuantity}>-</button>
        <span className={styles.menu__input} onInput={changeQuantity} onBlur={validateQuantity} contentEditable suppressContentEditableWarning={true}>{quantity}</span>
        <button className="btn" type="button" onClick={incrementQuantity}>+</button>
      </div>

      <button className={`${styles_menu.menu__submit} btn--big`} type="button" onClick={() => addToCart({ id, quantity })}>+</button>
      </div>
    </main>
  )
}

export default ShopDetails
