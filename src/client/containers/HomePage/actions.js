import * as types from './constants';

export const loadBooks = token => ({
  types:   [
    types.LOAD_GET_ALL_BOOKS_REQUEST,
    types.LOAD_GET_ALL_BOOKS_SUCCESS,
    types.LOAD_GET_ALL_BOOKS_FAILURE
  ],
  promise: api => api.get(`/api/getAllBooks?token=${token}`)
});

export const postNewBook = (data, token) => ({
  types:   [
    types.POST_NEW_BOOK_REQUEST,
    types.POST_NEW_BOOK_SUCCESS,
    types.POST_NEW_BOOK_FAILURE
  ],
  promise: api => api.post(`/api/addBook?token=${token}`, data)
});

export const changeParam = (key, value) => ({
  type: types.CHANGE_PARAM,
  key,
  value,
});
