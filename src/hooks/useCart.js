import { useState, useEffect } from 'react'

function useCart(cart, updateCart) {

  const [order, setOrder] = useState(cart)

  const addToCart = (menu) => {
    const newOrder = {...order}
    newOrder[menu.id] = +menu.quantity
    setOrder(newOrder)
  }

  const removeFromCart = (menuId) => {
    setOrder((prevOrder) => {
      const newOrder = {...prevOrder}
      delete newOrder[menuId]
      return newOrder
    })
  }

  useEffect(() => {
    updateCart(order);
  }, [order])

  return [addToCart, removeFromCart]

}

export default useCart
