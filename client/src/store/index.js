import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import ProfileReducer from '../store/reducers/ProfileReducer';
import TrainingReducer from './reducers/TrainingReducer';

const store = createStore(
  combineReducers({
    profileState: ProfileReducer,
    trainingState: TrainingReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
