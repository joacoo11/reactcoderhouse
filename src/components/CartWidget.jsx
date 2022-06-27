import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CartWidget() {
  return (
    <div>
        <a href="/"><ShoppingCartIcon style={style.cartShop} fontSize="medium"/><span>0</span></a>
    </div>
  )
}

export default CartWidget

const style = {
    cartShop :{
        marginTop :'9px'
    }
}