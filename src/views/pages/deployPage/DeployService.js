import aFetch from '../../../shared/authFetch';

export function deployApi() {
  return () => aFetch('http://peiper.se:3000')
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}

export function deploySite() {
  return () => aFetch('http://peiper.se:3001')
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}
