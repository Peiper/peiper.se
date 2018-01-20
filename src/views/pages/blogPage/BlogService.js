import { fetchedCategories, fetchedArticles, fetchedArticle } from './BlogActions';
import aFetch from './authFetch';

let baseApiUrl = 'https://';
if (process.env.NODE_ENV === 'production') {
  baseApiUrl += 'labs.beamonpeople.se/web3punkt0-api';
} else {
  baseApiUrl += 'localhost:8888';
}

const category = c => (
  {
    id: c.sys.id,
    name: c.Fields.name,
    label: c.Fields.label,
  }
);

const article = a => (
  {
    id: a.Id,
    heroText: a.HeroText,
    headline: a.Headline,
    headlineShort: a.HeadlineShort,
    preamble: a.Preamble,
    bodyText: a.BodyText,
    smallImageUrl: a.SmallImage.Url,
    heroImageUrl: a.HeroImage.Url,
  }
);

const categoryModel = (categories) => {
  if (!Array.isArray(categories)) {
    throw new Error('Beamz is not an array!!! :(');
  }
  return categories.map(category);
};

const articlesModel = (articles) => {
  if (!Array.isArray(articles)) {
    throw new Error('Beamz is not an array!!! :(');
  }
  return articles.map(article);
};

export function getCategories() {
  return dispatch => aFetch(`${baseApiUrl}/blog/categories`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => categoryModel(res))
    .then(result => dispatch(fetchedCategories(result)));
}

export function getArticles() {
  return dispatch => aFetch(`${baseApiUrl}/blog`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => articlesModel(res))
    .then(result => dispatch(fetchedArticles(result)));
}

export function getArticlesByCategory(id) {
  return dispatch => aFetch(`${baseApiUrl}/blog?category=${id}`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => articlesModel(res))
    .then(result => dispatch(fetchedArticles(result)));
}

export function getArticle(id) {
  return dispatch => aFetch(`${baseApiUrl}/blog/${id}`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => article(res))
    .then(result => dispatch(fetchedArticle(result)));
}
