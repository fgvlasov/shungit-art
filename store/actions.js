import { LOAD_CART, ADD_ITEM, REMOVE_ITEM } from './types';

export const loadCart = () => {
  return {
    type: LOAD_CART,
  };
};

export const addItem = id => {
  return {
    type: ADD_ITEM,
    id: id
  };
};

//remove item action
export const removeItem = id =>{
    return{
        type: REMOVE_ITEM,
        id
    }
}