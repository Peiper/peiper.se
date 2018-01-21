import { fetchedNow } from './NowActions';
import aFetch from './authFetch';

let baseApiUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseApiUrl = 'https://peiper.se:81/api';
} else {
  baseApiUrl = 'http://localhost:5000/api';
}

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
