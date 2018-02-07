import _ from 'lodash';
import initialState from '../../../InitialState';
import * as nowActions from './NowActions';

export function now(state = initialState.now, action) {
  const clone = _.clone(state);
  switch (action.type) {
    case nowActions.FETCHED_NOW:
      clone.value = action.payload.value;
      return clone;
    default:
      return state;
  }
}
