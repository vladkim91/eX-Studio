import { createStore, combineReducers, applyMiddlware } from 'react';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    profile: null
  }),
  devToolsEnhancer(applyMiddlware)
);

export default store;
