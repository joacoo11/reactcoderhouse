import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from './Firebase'



export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'Products');
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [productId]);

    return (
        <>
            {loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} />}
        </>
    )
}


export default ItemDetailsContainer