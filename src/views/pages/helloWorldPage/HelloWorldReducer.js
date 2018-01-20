import _ from 'lodash';
import initialState from '../../../InitialState';
import * as helloWorldActions from './HelloWorldActions';

export function helloWorld(state = initialState.helloWorld, action) {
  const clone = _.clone(state);
  switch (action.type) {
    case helloWorldActions.FETCHED_BEAMZ:
      clone.beamz = action.payload.beamz;
      return clone;
    default:
      return state;
  }
}

export function test() {

}
