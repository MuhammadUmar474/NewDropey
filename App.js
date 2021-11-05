import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Route from './src/navigation/route';
import './src/i18n';
const App = () => {
  return (
    <Provider store = {store} >
      <Route />
    </Provider>
  );
};

export default App;
