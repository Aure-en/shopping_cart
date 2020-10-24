import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu({ name, price, description, image }) {

  const [quantity, setQuantity] = useState(0)

  const changeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <>
      <img src={image.src} alt={image.alt} />
      <div className="menu__name">{name}</div>
      <div className="menu__description">{description}</div>
      <div className="menu__price">{price}</div>
      <div className="menu__order">
        Order for <input type="number" minvalue="0" value={quantity} onChange={changeQuantity}/>
        <button type="button">+</button>
      </div>
    </>
  )
}

export default Menu
