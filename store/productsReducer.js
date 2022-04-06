import { LOAD_PRODUCTS } from './types';
import { cards } from '../data';

const initialState = {
  loading: false,
  error: false,
  products: []
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: false, error: false, products: cards };
    default: return state;
  }
};