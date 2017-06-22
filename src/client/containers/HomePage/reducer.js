import { combineReducers } from 'redux';
import * as types from './constants';
import { setValue } from '../../helpers/setObjValue';

const initialState = {
  entity: {
    bookList: [],
    autorList: [],
    authors: {},
    books: {},
    genre: [],
  },
  newBook: {
    name: '',
    author: '',
    desc: ''
  },
  isLoad: false,
};

const entity = (state = initialState.entity, action) => {
  switch (action.type) {
    // ...........................................................................
    case types.LOAD_GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        bookList: action.data.result,
      }
    // ...........................................................................
    default:
      return state;
  }
};

const newBook = (state = initialState.newBook, action) => {
  switch (action.type) {
    // ...........................................................................
    case types.POST_NEW_BOOK_SUCCESS:
      return initialState.newBook;
    // ...........................................................................
    case types.CHANGE_PARAM:
      return {
        ...state,
        ...setValue(state, action.key, action.value),
      };
    // ...........................................................................
    default:
      return state;
  }
};

const isLoad = (state = initialState.isLoad, action) => {
  switch (action.type) {
    // ...........................................................................
    case types.LOAD_GET_ALL_BOOKS_REQUEST:
    case types.POST_NEW_BOOK_REQUEST:
      return true;
    // ...........................................................................
    case types.LOAD_GET_ALL_BOOKS_SUCCESS:
    case types.LOAD_GET_ALL_BOOKS_FAILURE:
    case types.POST_NEW_BOOK_SUCCESS:
    case types.POST_NEW_BOOK_FAILURE:
      return false;
    // ...........................................................................
    default:
      return state;
  }
};

export default combineReducers({
  entity,
  newBook,
  isLoad
});
