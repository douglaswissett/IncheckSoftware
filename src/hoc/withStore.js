import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';

const withStore = (WrappedComponent) => (props) => (
  <Provider store={store}>
    <WrappedComponent {...props} />
  </Provider>
);

export default withStore;
