import React from 'react'

function Item({ product }) {
  return (
    <div className='itemBox'>
      <h2>{product.title}</h2>
      <img src={product.image} alt="img" />
      <p>{product.price}</p>
    </div>
  )
}

export default Item
