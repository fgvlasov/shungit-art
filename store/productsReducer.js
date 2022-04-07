import { LOAD_PRODUCTS } from './types';
import { cards } from '../data';

const initialState = {
  isLoaded: false,
  products: []
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, isLoaded: true, products: cards };
    default: return state;
  }
};