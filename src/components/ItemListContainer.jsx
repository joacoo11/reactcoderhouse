import React, { useState, useEffect} from 'react'
import mac from '../assets/mac.jpg'
import ItemList from './ItemList'

function ItemListContainer() {
  
  const[products, setProducts] = useState([]);
  const[error, setError] = useState(false);
  const[loading, setLoading] = useState(true);


  useEffect(()=> {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    //   .catch(err => console.error(err))

    // Estas dos cosas son lo mismo

    const getProducts = async () =>{
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data)
      }
      catch(err){
        console.log(err)
        setError(true)
      }
      finally{
        setLoading(false);  
      }
    }
  
    getProducts();

      
  }, []);
   
  return (
    <>
        {loading ? <p>Loading...</p> : 
          error ? <p>error</p>
            : <ItemList products={products} />
            }
    </>
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