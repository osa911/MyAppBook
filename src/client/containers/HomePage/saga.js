import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import { POST_NEW_BOOK_SUCCESS } from './constants';
import * as actions from './actions';

function* reLoadBooks() {
  const state = yield select();
  const token = state['App'].loginInfo.token;
  yield put(actions.loadBooks(token));
}

function* rootSagas() {
  yield takeEvery([ POST_NEW_BOOK_SUCCESS ], reLoadBooks);
}

export default rootSagas;
