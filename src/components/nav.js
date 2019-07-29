import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Dropdown,
  Button,
  Divider,
  Navbar,
  Icon,
  NavItem
} from 'react-materialize';

const Nav = ({ cart }) => {
  return (
    <div className="nav--sticky">
      <Navbar alignLinks="left">
        <NavItem>
          <Link to="/">Products</Link>
        </NavItem>
        <NavItem>
          <Link to="/cart">
            <Icon>shopping_cart</Icon>
            {/* {cart.length} */}
          </Link>
        </NavItem>
        <NavItem>
          <a>{cart.length} items in cart</a>
        </NavItem>
      </Navbar>
    </div>
  );
};

const mapState = state => ({ cart: state.cart });

export default connect(mapState)(Nav);
