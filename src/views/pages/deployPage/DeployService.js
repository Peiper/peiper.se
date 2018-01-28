const opts = Object.assign({
  mode: 'no-cors',
});
export function deployApi() {
  return () => fetch('https://peiper.se:82/api/deploy', opts)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}

export function deploySite() {
  return () => fetch('https://peiper.se:82/site/deploy', opts)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    });
}
