import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

const Routes = props => {
  return (
    <Switch>
      <Route path="/" component={home} />
    </Switch>
  );
};

const mapState = state => ({});

export default withRouter(connect(mapState)(Routes));
