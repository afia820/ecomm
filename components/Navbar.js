import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import styles from './Navbar.module.css';

import { useCart } from '../hooks/use-cart';

const Navbar = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>Skatr Shop</p>
      <p className={styles.navCart}>
        <button type="submit" onClick={checkout}>
          <FaShoppingCart /> ${subtotal.toFixed(2)}
        </button>
      </p>
    </nav>
  );
};

export default Navbar;
