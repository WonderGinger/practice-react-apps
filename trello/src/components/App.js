import React from 'react';
import '../css/App.css';
import { Provider } from 'react-redux';
import store from '../store';

import Board from './Board';

function App() {
  return (
    <Provider store={store}>
      <Board/>
    </Provider>
  );
}

export default App;
