import React from 'react';
import Head from 'next/head';
import { FaShoppingCart } from 'react-icons/fa';

import styles from '../styles/Home.module.css';
import products from '../products.json';
import { useCart } from '../hooks/use-cart';

export default function Home() {
  const { subtotal, quantity, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Skatr Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Skatr Shop</a>
        </h1>
        <p className={styles.description}>The place to get some skates!</p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, price, id } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img src={image} />
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>{description}</p>
                  <p>
                    <button
                      type="submit"
                      className={styles.button}
                      onClick={() => {
                        addToCart({ id });
                      }}
                    >
                      Add to Cart
                    </button>
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
