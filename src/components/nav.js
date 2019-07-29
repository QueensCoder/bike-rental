import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ cart }) => {
  return (
    <nav>
      <p>{cart.length}</p>
      <Link to="/cart">
        <img src="images/cart.png" alt="" />
      </Link>
      <Link to="/">Products</Link>
    </nav>
  );
};

const mapState = state => ({ cart: state.cart });

export default connect(mapState)(Navbar);
