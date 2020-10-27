import React from 'react'
import { Link } from 'react-router-dom'
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

  if (Object.keys(cart).length === 0) {
    return (
      <div className="box">
        <h3>Overview</h3>
        <span className="decoration">⬧</span>
        <div>Sorry, it appears that your cart is empty. <br/>
        Feel free to take a look at our menu</div>
        <Link to="/shop" className="btn btn--text">Menu</Link>
      </div>
    )

  } else {
    return (
      <>
      <div className="box">
        <h3>Overview</h3>
        <span className="decoration">⬧</span>

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

      <div>{calculatePrice(cart)}$</div>
    </div>
    </>
    )
  }
}

export default Overview
