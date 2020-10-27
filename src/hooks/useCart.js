import { useState, useEffect } from 'react'

function useCart(cart, updateCart) {

  const [order, setOrder] = useState(cart)

  const addToCart = (menu) => {
    setOrder({...order, [menu.id]: +menu.quantity})
  }

  const removeFromCart = (id) => {
    setOrder({...order, [id]: 0})
  }

  useEffect(() => {
    updateCart(order);
  }, [order])

  return [addToCart, removeFromCart]

}

export default useCart
