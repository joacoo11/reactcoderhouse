import React from 'react'
import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <div className='itemBox'>
      <h2>{product.title}</h2>
      <img src={product.image} alt="img" />
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <div className='viewDetails'>View details</div>      
      </Link>
    </div>
  )
}

export default Item