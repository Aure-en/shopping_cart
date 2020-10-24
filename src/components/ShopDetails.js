import React, { useState, useEffect } from 'react'
import menu from '../data/menu'

function ShopDetails( {match} ) {

  const [quantity, setQuantity] = useState(0)
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

  const { name, price, description, image, details } = item

  useEffect(() => {
    setItem(menu.filter(item => item.id === +match.params.id)[0])
  }, [])

  const changeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <main>
      <img src={image.src} alt={image.alt} />
      <div className="menu__name">{name}</div>
      <div className="menu__description">{description}</div>
      <div className="menu__price">{price}</div>
      <div className="menu__details">
        {
          details.map((course, index) => (
          <li key={index}>
            <div>{course.name}</div>
            <div>{course.description}</div>
          </li>
          ))
        }
      </div>
      <div className="menu__order">
        Order for <input type="number" minvalue="0" value={quantity} onChange={changeQuantity}/>
        <button type="button">+</button>
      </div>
    </main>
  )
}

export default ShopDetails
