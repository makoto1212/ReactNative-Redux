import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Home from './components/Home/index';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;