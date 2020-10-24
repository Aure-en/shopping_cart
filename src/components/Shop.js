import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menu from '../data/menu'
import Menu from './Menu'

function Shop() {

  const [order, setOrder] = useState([])

  return (
    <ul>
      {
        menu.map(
          item => (
            <li className="menu" key={item.id}>
              <Link to={`shop/${item.id}`}><Menu name={item.name} price={item.price} description={item.description} image={item.image} /></Link>
            </li>
          )
        )
      }
    </ul>
  )
}

export default Shop
