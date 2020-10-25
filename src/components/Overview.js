import React from 'react'
import stylesMenu from '../styles/layout/menu.module.scss'
import menu from '../data/menu'

function Overview( { cart } ) {

  const calculatePrice = (cart) => {
    let price = 0;
    for (const item in cart) {
      const menuItem = menu.find(menuItem => menuItem.id === +item)
      price += +(menuItem.price.match(/\d+/)) * cart[item]
    }
    return price
  }

  return (
    <>

    <ul>
    {
      Object.keys(cart).map( (itemId) => {
        const item = menu.find(menuItem => menuItem.id === +itemId)

        return (
          <li key={itemId}>
            <h2 className="menu__name">{item.name}</h2>
            <div className={stylesMenu.menu__description}>{item.description}</div>
            <div className={stylesMenu.menu__price}>{item.price} × {cart[itemId]} = {+item.price.match(/\d+/) * cart[itemId]}</div>
          </li>
        )
      })
    }
  </ul>

  <div>{calculatePrice(cart)}</div>
  </>
  )
}

export default Overview
