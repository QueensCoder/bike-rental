const initialState = [];

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/**
 * ACTION CREATORS
 */
export const addItem = item => ({ type: ADD_TO_CART, item });
export const removeItem = item => ({ type: REMOVE_FROM_CART, item });

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.item;
    case REMOVE_FROM_CART:
      return action.item;
    default:
      return state;
  }
}
