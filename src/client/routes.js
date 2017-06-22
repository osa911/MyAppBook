import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  app,
  homePage,
  authorPage,
  authorPageItem,
  bookPage,
  bookPageItem,
  notFound
} from './containers';

export default (
  <Route path='/' component={app}>
    <IndexRoute component={homePage} />
    <Route path='/author' component={authorPage} />
    <Route path='/author/:id' component={authorPageItem} />
    <Route path='/book' component={bookPage} />
    <Route path='/book/:id' component={bookPageItem} />
    <Route path='*' component={notFound} />
  </Route>
);
