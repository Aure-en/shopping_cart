import { useState, useEffect } from 'react'

function useCart(cart, updateCart) {

  const [order, setOrder] = useState(cart)

  const addToCart = (menu) => {
    const newOrder = {...order}
    newOrder[menu.id] = +menu.quantity
    setOrder(newOrder)
    console.log(newOrder)
  }

  useEffect(() => {
    updateCart(order);
    console.log(order, cart)
  }, [cart, order])

  return addToCart

}

export default useCart
