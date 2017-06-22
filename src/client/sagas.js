import { fork } from 'redux-saga/effects';

import HomePage from './containers/HomePage/saga';

function* rootSagas() {
  yield [
    fork(HomePage),
  ];
}

export default rootSagas;
