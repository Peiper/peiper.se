let baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://peiper.se:81/api';
} else {
  baseUrl = 'http://localhost:5000/api';
}

export const baseApiUrl = baseUrl;

export function aFetch(url, options = {}) {
  const opts = Object.assign(options, {
    credentials: 'same-origin',
  });
  return fetch(url, opts);
}

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
