import React from 'react'
import mac from '../assets/mac.jpg'


function ItemListContainer() {
  return (
    <div>
        <div style={style.divStyle}>
          <h1>MacBook Air</h1>
        </div>
        <div style={style.divStyle}>
          <img style={style.imgStyle} src={mac} alt="mac" />
        </div>
    </div>
  )
}

export default ItemListContainer

const style = {
    divStyle :{
        display :'flex',
        justifyContent :'center',
        alignText :'center'
    },
    imgStyle :{
      width :'350px',
      height :'300px'
    }



}