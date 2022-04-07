import { LOAD_CART, ADD_ITEM, REMOVE_ITEM } from './types';
// import { cards } from '../data';

const initialState = {
    loading: false,
    error: false,
    items: [],
    totalPrice: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CART:
            return { ...state, loading: false, error: false, items: [...state.items] };
        case ADD_ITEM:
            const addedItem = action.item;
            const itemPrice = addedItem.price;

            let updatedOrNewCartItem;
            const founded = state.items.find(item => item.id === addedItem.id);

            if (founded) {
                updatedOrNewCartItem = {
                    ...founded,
                    quantity: founded.quantity + 1
                };
            } else {
                updatedOrNewCartItem = {
                    ...addedItem,
                    quantity: 1,
                };
            }

            return {
                ...state,
                loading: false,
                error: false,
                items: founded
                    ? [...state.items.filter(item => item.id !== addedItem.id), updatedOrNewCartItem]
                    : [...state.items, updatedOrNewCartItem],
                totalPrice: state.totalPrice + itemPrice
            };
        case REMOVE_ITEM: // --> HomeWork for Fedor
            return { ...state, loading: false, error: false, items: state.items.filter(item => action.id !== item.id), };
        default: return state;
    }
};

{/*
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from './types'

import cards from '../data'

const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90}
    ],
    addedItems:[],
    total: 0
}*

const CartReducer= (state = cards,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== SUB_SHIPPING){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default CartReducer
*/}