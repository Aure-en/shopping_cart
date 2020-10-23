import React from 'react'

function Menu({ name, price, image }) {
  return (
    <div class="menu">
      <img src={image.src} alt={image.alt} />
      <div class="menu__name">{name}</div>
      <div class="menu__price">{price}</div>
      <div class="menu__order">
        Order for <input type="number"/>
        <button type="button">+</button>
      </div>
    </div>
  )
}

export default Menu
