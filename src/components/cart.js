import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../store';
import { Button, Card, Row, Col } from 'react-materialize';

const Item = ({ item }, i) => {
  const { image, price, name } = item;
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt="" />
      <p>{price.toFixed(2)}</p>
    </div>
  );
};

const Cart = ({ cart }) => {
  console.log('got here<><>');
  return (
    <div className="list--spacer">
      <h2>
        Total: ${cart.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)}
      </h2>
      <ul>
        {cart.map((item, i) => {
          return <Item key={i} item={item} i={i} />;
        })}
      </ul>
    </div>
  );
};

const mapState = state => ({ cart: state.cart });
const mapDispatch = dispatch => {
  return {
    remove(index) {
      dispatch(removeItem(index));
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(Cart);
