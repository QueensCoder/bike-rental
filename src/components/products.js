import React from 'react';
import products from '../data';

const Product = ({ item }) => {
  const { name, price, product_type, image } = item;
  return (
    <div className="product__card">
      <h5>{name}</h5>
      <h5>{`$${price.toFixed(2)}`}</h5>
      <h5>{product_type}</h5>
      <img src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
};

const ProductList = () => {
  return (
    <ul>
      {products.map(item => {
        return <Product key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ProductList;
