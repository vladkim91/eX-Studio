import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import ProfileReducer from '../store/reducers/ProfileReducer';
import TrainingReducer from './reducers/TrainingReducer';
import BrowseReducer from './reducers/BrowseReducer';

const store = createStore(
  combineReducers({
    profileState: ProfileReducer,
    trainingState: TrainingReducer,
    workoutAndExercisesState: BrowseReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
