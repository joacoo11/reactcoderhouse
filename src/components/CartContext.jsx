import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const[products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);


    const getQtyProducts = () =>{
        let qty = 0;
        products.forEach(product => {
            qty += product.qty
        }
        )
        setQtyProducts(qty);
    }

    useEffect(() => {
        getQtyProducts();
    }, [products])

    useEffect(() => {
        getQtyProducts();
       }, [products])

       const addProduct = (product) => {
        if (isInCart(product.id)){
            const foundProduct = products.find(p => p.id === product.id)
            const indice = products.indexOf(foundProduct)
            const copy = [...products]
            copy[indice].qty += product.qty
            setProducts(copy)
        }else{
            setProducts([...products, product])
        }
       }

       const deleteProduct = (id) => {
            const newProducts = products.filter(product => product.id !== id);
            setProducts(newProducts)
       }

       const isInCart = (id) => {
            products.some(product => product.id === id);
       }

       const clear = () =>{
        setProducts([]);
        setQtyProducts(0)
       }

       return(
        <Provider value={{ products, addProduct, deleteProduct, clear, qtyProducts }}>
            {children}
        </Provider>
       )
}

export default CartCustomProvider 