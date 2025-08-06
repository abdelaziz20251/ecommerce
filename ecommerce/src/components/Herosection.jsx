import React from 'react';
import styles from './HeroSection.module.css';
import heroImg from '../assets/Images/hero-product.jpg'; // Replace with your image path
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Your Dream Gadgets Delivered</h1>
                <p>Explore the latest electronics, fashion, and more. Get exclusive discounts today.</p>
                <Link to="/products" className={styles.ctaButton}>
                    Shop Now
                </Link>
            </div>
            <div className={styles.imageContainer}>
                <img src={heroImg} alt="Featured product" />
            </div>
        </section>
    );
}
