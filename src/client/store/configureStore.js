import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import apiMiddleware from './apiMiddleware';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(api, initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware(api),
      thunk,
      logger,
      sagaMiddleware
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
