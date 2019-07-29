import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap';
import { filterProduct, clearSearch, clearCart } from '../store';

const NBar = ({ cart, checkout }) => {
  return (
    <div className="nav--sticky">
      <Navbar className="navbar" bg="light" expand="lg">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/cart">Items in Cart {cart.length}</Link>
        <Button onClick={checkout} className="btn-checkout--center">
          Check Out
        </Button>
      </Navbar>
    </div>
  );
};

const mapState = state => ({ cart: state.cart });
const mapDispatch = dispatch => {
  return {
    handleChange(evt) {
      const str = evt.target.value;
      if (!str.length) dispatch(clearSearch);
      else dispatch(filterProduct(str));
    },
    checkout() {
      dispatch(clearCart());
      alert('You order has been processed.');
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(NBar);
