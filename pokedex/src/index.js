import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './containers/Pokedex';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Pokedex />
  </Provider>,
  document.getElementById('root')
);
