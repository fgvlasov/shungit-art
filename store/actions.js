import { LOAD_PRODUCTS, LOAD_CART, ADD_ITEM, REMOVE_ITEM } from './types';

// products
export const loadProducts = () => {
  return {
    type: LOAD_PRODUCTS,
  };
};

// cart
export const loadCart = () => {
  return {
    type: LOAD_CART,
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};