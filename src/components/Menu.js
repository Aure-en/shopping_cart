import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu({ name, price, description, image, id, addToCart }) {

  const [quantity, setQuantity] = useState(0)

  const changeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <>
    <Link to={`shop/${id}`}>
      <img src={image.src} alt={image.alt} />
      <div className="menu__name">{name}</div>
    </Link>
      <div className="menu__description">{description}</div>
      <div className="menu__price">{price}</div>
      <div className="menu__order">
        Order for <input type="number" min="0" value={quantity} onChange={changeQuantity}/>
        <button type="button" onClick={() => addToCart({ id, quantity })}>+</button>
      </div>
    </>
  )
}

export default Menu
