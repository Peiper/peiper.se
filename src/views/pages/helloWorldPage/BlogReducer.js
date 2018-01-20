import _ from 'lodash';
import initialState from '../../../InitialState';

export function blog(state = initialState.helloWorld, action) {
  const clone = _.clone(state);
  switch (action.type) {
    case 'BLOG_TEST':
      clone.test = action.payload.test;
      return clone;
    default:
      return state;
  }
}

export function foo() {

}
