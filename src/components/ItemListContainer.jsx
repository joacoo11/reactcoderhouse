import React, { useState, useEffect} from 'react'
import mac from '../assets/mac.jpg'
import { InitialProducts } from './products'

const promise = new Promise ((res,rej) =>{
  setTimeout(()=> {
    res(InitialProducts);
  },2000)
})

function ItemListContainer() {
  
  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    promise 
      .then((products) => {
        setProducts(products);
      })
      .catch((error)=>{
        console.error("error", error)
      })
      .finally(()=>{
        setLoading(false);
      })
  }, []);
  
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