import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { ProductsList, Cart } from './components';

const Routes = props => {
  return (
    <div className="App">
      <header />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
};

const mapState = state => ({});

export default withRouter(connect(mapState)(Routes));
