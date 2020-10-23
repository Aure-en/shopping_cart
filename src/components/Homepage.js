import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <main className="homepage">
      <div className="description">
        <h1 className="description__title">Rhodes Restaurant</h1>

        <div className="description__text">
          <p>Since opening in 1993, Rhodes has earned its place among the pillars of New York City’s bustling dining scene, receiving numerous accolades for its refined European cuisine, world-class cellar and gracious hospitality.</p>

          <p>Located in the former Mayfair Hotel on Park Avenue – the original site of Le Cirque – Rhodes is steeped in French culinary history. Building on time-honored techniques, Rhodes presents a modern, seasonal menu inspired by the finest meats, wild game, seafood, fruits, vegetables and foraged flavors from around the world. Wines from the Rhône and Burgundy, as well as a robust Champagne program, rank among the noteworthy highlights of the restaurant’s award-winning cellar.</p>

          <p>Presented with a flourish of fine hospitality, the restaurant’s effect is transportive, a seamless service overseen and orchestrated by more than 150 staff members behind-the-scenes.</p>
        </div>
      </div>

      <Link to="/shop">Order now</Link>

    </main>
  )
}

export default Homepage
