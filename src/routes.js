import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { ProductsList } from './components';

const Routes = props => {
  return (
    <div className="App">
      <header className="App-header" />
      <Switch>
        <Route path="/" component={ProductsList} />
      </Switch>
    </div>
  );
};

const mapState = state => ({});

export default withRouter(connect(mapState)(Routes));
