import React from 'react';
import { connect } from 'react-redux';
import products from '../data';
import { addItem, removeItem } from '../store';

const Product = ({ item, prodClick }) => {
  const { name, price, product_type, image, id } = item;

  return (
    <div className="product__card">
      <h5>{name}</h5>
      <h5>{`$${price.toFixed(2)}`}</h5>
      <h5>{product_type}</h5>
      <img src={image} alt="" />
      <button onClick={evt => prodClick({ name, price, id })}>
        Add to Cart
      </button>
    </div>
  );
};

const ProductList = ({ prodClick, cart }) => {
  console.log(cart, '<><>><>');
  return (
    <ul>
      {products.map(item => {
        return <Product key={item.id} item={item} prodClick={prodClick} />;
      })}
    </ul>
  );
};

const mapState = state => ({ cart: state.cart });
const mapDispatch = dispatch => {
  return {
    prodClick(payload) {
      console.log(payload, '<><><><>');
      dispatch(addItem(payload));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(ProductList);
