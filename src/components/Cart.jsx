import React, { useContext } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {
    const {products} = useContext(cartContext)
    
    return(
        <>
            {products.lenght === 0
            ? <h1>You have not selected any product from our catalogue, click here to do so <Link to='/'>Click here</Link></h1>
            : <>{products.map(product => <h1 key={product.id}>{product.title}</h1>)}</>
            }
        </>
    )
}


export default Cart