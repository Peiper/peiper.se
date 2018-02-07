import { baseApiUrl, aFetch } from '../../../shared/authFetch';
import { fetchedNow } from './NowActions';

export function getNow() {
  return dispatch => aFetch(`${baseApiUrl}/now`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => dispatch(fetchedNow(res.result)));
}

export function test() {

}
