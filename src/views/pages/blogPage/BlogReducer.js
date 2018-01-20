import _ from 'lodash';
import initialState from '../../../InitialState';
import * as blogActions from './BlogActions';

export function blog(state = initialState.blog, action) {
  const clone = _.clone(state);
  switch (action.type) {
    case blogActions.FETCHED_CATEGORIES:
      clone.categories = action.payload.categories;
      return clone;
    case blogActions.FETCHED_ARTICLES:
      clone.articles = action.payload.articles;
      return clone;
    case blogActions.FETCHED_ARTICLE:
      clone.article = action.payload.article;
      return clone;
    default:
      return state;
  }
}

export function test(state = initialState.blog, action) {
  switch (action.type) {
    default:
      return state;
  }
}
