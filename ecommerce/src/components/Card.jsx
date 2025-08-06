import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.cardImage}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={style.cardContent}>
                <h3 className={style.cardTitle}>{props.title}</h3>
                <p className={style.cardDescription}>{props.description}</p>
                <p className={style.cardPrice}>${props.price}</p>

                <div className={style.cardButtons}>
                    <button className={style.cardButton}>Add to Cart</button>
                    <button className={`${style.cardButton} ${style.secondary}`} >
                        <Link to={`/product/${props.product_id}`} >View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
