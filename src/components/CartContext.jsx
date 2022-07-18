import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const[products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () =>{

    }

    useEffect(() => {
        getQtyProducts();
       }, [products])

       const addProduct = (product) => {

       }

       const deleteProduct = (id) => {

       }

       const isInCart = () => {
       }

       const clear = () =>{
        setProducts([]);
       }

       return(
        <Provider value={{ products, addProduct, deleteProduct, clear, qtyProducts }}>
            {children}
        </Provider>
       )
}

export default CartCustomProvider 