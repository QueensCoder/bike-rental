import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({ cart }) => {
  return (
    <nav>
      <p>{cart.length}</p>
      <img src="images/cart.png" alt="" />
    </nav>
  );
};

const mapState = state => ({ cart: state.cart });

export default connect(mapState)(Navbar);
