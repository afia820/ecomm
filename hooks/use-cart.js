import { useState } from 'react';

import products from '../products.json';
import { initiateCheckout } from '../lib/payments';

const defaultCart = {
  products: {},
};

export default function useCart() {
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

  return {
    cart,
    updateCart,
    subtotal,
    quantity,
    addToCart,
    checkout,
  };
}
