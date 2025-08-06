import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './ProductDetails.module.css'



export default function Product_Details() {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    console.log(product);
    return (
        <>
            <div className={style.productDetails}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <img src={product.images?.[0]} alt={product.title} />
                <p>Price: ${product.price}</p>
            </div>
        </>
    )
}