import products from '../data';
const initialState = products;

const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const filterProduct = str => ({ type: FILTER_PRODUCTS, str });
export const clearSearch = () => ({ type: CLEAR_SEARCH });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return state.filter(prod => prod.product_type.includes(action.str));
    case CLEAR_SEARCH:
      return [...products];
    default:
      return state;
  }
}
