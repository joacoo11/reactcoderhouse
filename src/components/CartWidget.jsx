import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from './CartContext';


function CartWidget() {

  const { qtyProducts } = useContext(cartContext)

  return (
    <div>
        <a href="/"><ShoppingCartIcon style={style.cartShop} fontSize="medium"/><span>{qtyProducts}</span></a>
    </div>
  )
}

export default CartWidget

const style = {
    cartShop :{
        marginTop :'9px'
    }
}