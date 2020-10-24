import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Order</li></Link>
          <Link to="/cart"><li><i className="fas fa-shopping-basket"></i></li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
