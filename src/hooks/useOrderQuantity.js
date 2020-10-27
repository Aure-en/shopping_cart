import {useState} from 'react'

function useOrderQuantity(qty = 0) {

  const [quantity, setQuantity] = useState(qty)

  const changeQuantity = (event) => {
    setQuantity(+event.target.textContent)
  }

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity < 1) return
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  const validateQuantity = () => {
    if (quantity < 0) {
      setQuantity(0)
    }
  }

  return [quantity, changeQuantity, incrementQuantity, decrementQuantity, validateQuantity]

}

export default useOrderQuantity
