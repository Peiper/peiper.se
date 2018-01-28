export default (url, options = {}) => {
  const opts = Object.assign(options, {
    credentials: 'same-origin',
  });
  return fetch(url, opts);
};
