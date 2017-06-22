import { createStructuredSelector } from 'reselect';

const REDUCER = 'HomePage';
const APP = 'App';

const bookList = state => state[REDUCER].entity.bookList;
const authors = state => state[REDUCER].entity.authors;
const newBook = state => state[REDUCER].newBook;
const isLoad = state => state[REDUCER].isLoad;
const isLogined = state => state[APP].loginInfo.isLogined;
const token = state => state[APP].loginInfo.token;

export default createStructuredSelector({
  bookList,
  authors,
  isLogined,
  token,
  newBook,
  isLoad
});
