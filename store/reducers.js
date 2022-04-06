import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});
{/*
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SUB_QUANTITY = 'SUB_QUANTITY'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const ADD_SHIPPING = 'ADD_SHIPPING'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract quantity action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add quantity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}


export default rootReducer
*/}