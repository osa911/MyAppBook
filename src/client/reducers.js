import { combineReducers } from 'redux';

import App from './containers/App/reducer';
import HomePage from './containers/HomePage/reducer';

const rootReducer = combineReducers({
  App,
  HomePage
});

export default rootReducer;
