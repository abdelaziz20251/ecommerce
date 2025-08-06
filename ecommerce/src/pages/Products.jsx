import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import style from './Products.module.css';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);

    return (
        <div className={style.productContainer}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    product_id={product.id}
                    image={product.images[0]}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
}
