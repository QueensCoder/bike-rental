import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../store';
import { Button } from 'react-materialize';

const Item = ({ item, remove, i }) => {
  const { image, price, name } = item;
  return (
    <div className="item__card">
      <p>{name}</p>
      <img className="img--small" src={image} alt="" />
      <p>${price.toFixed(2)}</p>
      <Button className="red btn--small" onClick={evt => remove(i)}>
        Remove Item from Cart
      </Button>
    </div>
  );
};

const Cart = ({ cart, remove }) => {
  return (
    <div className="list--spacer">
      <h2>
        Total: ${cart.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)}
      </h2>
      <ul className="list--flow">
        {cart.map((item, i) => {
          return <Item key={i} item={item} i={i} remove={remove} />;
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
