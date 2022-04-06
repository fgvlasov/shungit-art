import { LOAD_CART, ADD_ITEM, REMOVE_ITEM } from './types';

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