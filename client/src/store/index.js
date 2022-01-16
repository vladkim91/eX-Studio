import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import ProfileReducer from '../store/reducers/ProfileReducer';

const store = createStore(
  combineReducers({
    profileState: ProfileReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
