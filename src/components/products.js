import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store';
import { Button } from 'react-materialize';

const Product = ({ item, prodClick, cartRemove }) => {
  const { name, price, product_type, image, id } = item;
  return (
    <div className="item__card">
      <h5>{name}</h5>
      <h5>{product_type}</h5>
      <img className="img--small" src={image} alt="" />
      <h5>{`$${price.toFixed(2)}`}</h5>
      <Button
        className="btn--small"
        onClick={evt => prodClick({ name, price, id, image })}
      >
        Add to Cart
      </Button>
    </div>
  );
};

const ProductList = ({ prodClick, products }) => {
  return (
    <ul className="list--spacer list--flow">
      {products.map(item => {
        return <Product key={item.id} item={item} prodClick={prodClick} />;
      })}
    </ul>
  );
};

const mapState = state => ({ products: state.products });

const mapDispatch = dispatch => {
  return {
    prodClick(payload) {
      dispatch(addItem(payload));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(ProductList);
