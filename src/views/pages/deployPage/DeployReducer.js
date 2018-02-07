import _ from 'lodash';
import initialState from '../../../InitialState';
import * as deployActions from './DeployActions';

export function deploy(state = initialState.deploy, action) {
  const clone = _.clone(state);
  switch (action.type) {
    case deployActions.FETCHED_API_BUILDS:
      clone.apiBuilds = action.payload.value;
      return clone;
    case deployActions.FETCHED_SITE_BUILDS:
      clone.siteBuilds = action.payload.value;
      return clone;
    default:
      return state;
  }
}
