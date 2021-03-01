import { useState } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import products from '../products.json';
import { initiateCheckout } from '../lib/payments';

const defaultCart = {
  products: {},
};

export default function Home() {
  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return { ...cart.products[key], pricePerItem: product.price };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  const addToCart = ({ id } = {}) => {
    updateCart((prev) => {
      // copy of current state
      let cartState = { ...prev };

      // check if product exists in cart
      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        // create product in cart
        cartState.products[id] = {
          id,
          quantity: 1,
        };
      }
      return cartState;
    });
  };

  const checkout = () => {
    initiateCheckout({
      lineItems: cartItems.map(({ id, quantity }) => {
        return {
          price: id,
          quantity,
        };
      }),
    });
  };

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
        <p className={styles.description}>Thee place to get some skates!</p>
        <p className={styles.description}>
          <strong>Items:</strong> {quantity}
          <br />
          <strong>Total Cost:</strong> ${subtotal}
          <br />
          <button className={styles.button} onClick={checkout}>
            Checkout
          </button>
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, price, id } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img src={image} alt="Moxi Jungle Skates" />
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
