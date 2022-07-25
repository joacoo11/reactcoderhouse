import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from './Firebase'
import { getDocs, collection } from "firebase/firestore"


export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { categoryId } = useParams();



    useEffect (() => {
        const productCollection = collection(db, "Products");
        getDocs(productCollection)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(lista)
            setLoaded(false)
        })
    }, [])

    return (
        <>
            {loaded ? <CircularProgress color="success" /> : <ItemList products={products} />}
        </>
    )
}


export default ItemListContainer

