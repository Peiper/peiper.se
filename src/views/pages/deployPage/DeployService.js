import aFetch from '../../../shared/authFetch';

export function deployApi() {
  return () => aFetch('http://peiper.se:3000/deploy-api')
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}

export function deploySite() {
  return () => aFetch('http://peiper.se:3000/deploy-site')
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}
