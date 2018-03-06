import { baseApiUrl, aFetch, post } from '../../../shared/authFetch';
import { fetchedApiBuilds, fetchedSiteBuilds } from './DeployActions';

export function deployApi(ver) {
  return () => post('https://peiper.se:82/api/deploy', { version: ver })
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}

export function deploySite(ver) {
  return () => post('https://peiper.se:82/site/deploy', { version: ver })
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}

export function getLatestSiteBuilds(count) {
  return dispatch => aFetch(`${baseApiUrl}/deploy/sitebuilds/${count}`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => dispatch(fetchedSiteBuilds(res.result)));
}

export function getLatestApiBuilds(count) {
  return dispatch => aFetch(`${baseApiUrl}/deploy/apibuilds/${count}`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => dispatch(fetchedApiBuilds(res.result)));
}
