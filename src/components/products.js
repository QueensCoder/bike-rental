import React from 'react';
import { connect } from 'react-redux';
import products from '../data';
import { addItem, removeItem } from '../store';
import { Button, Card } from 'react-materialize';

const Product = ({ item, prodClick, cartRemove }) => {
  const { name, price, product_type, image, id } = item;
  return (
    <div>
      <h5>{name}</h5>
      <h5>{`$${price.toFixed(2)}`}</h5>
      <h5>{product_type}</h5>
      <img src={image} alt="" />
      <Button onClick={evt => prodClick({ name, price, id, image })}>
        Add to Cart
      </Button>
      <Button onClick={evt => cartRemove({ id })}>Remove Item from Cart</Button>
    </div>
  );
};

const ProductList = ({ prodClick, cartRemove, cart }) => {
  console.log(cart, 'what is inside of the cart atm');
  return (
    <ul className="list--spacer">
      {products.map(item => {
        return (
          <Product
            key={item.id}
            item={item}
            prodClick={prodClick}
            cartRemove={cartRemove}
          />
        );
      })}
    </ul>
  );
};

const mapState = state => ({ cart: state.cart });
const mapDispatch = dispatch => {
  return {
    prodClick(payload) {
      dispatch(addItem(payload));
    },
    cartRemove(item) {
      dispatch(removeItem(item));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(ProductList);
