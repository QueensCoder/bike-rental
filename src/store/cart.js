const initialState = [];

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

/**
 * ACTION CREATORS
 */
export const addItem = item => ({ type: ADD_TO_CART, item });
export const removeItem = id => ({ type: REMOVE_FROM_CART, id });
export const clearCart = () => ({ type: CLEAR_CART });

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    case REMOVE_FROM_CART:
      state.splice(action.id, 1);
      return [...state];
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}
