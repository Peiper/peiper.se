export const FETCHED_CATEGORIES = 'FETCHED_CATEGORIES';
export const FETCHED_ARTICLES = 'FETCHED_ARTICLES';
export const FETCHED_ARTICLE = 'FETCHED_ARTICLE';

export function fetchedCategories(categories) {
  return {
    type: FETCHED_CATEGORIES,
    payload: { categories },
  };
}

export function fetchedArticles(articles) {
  return {
    type: FETCHED_ARTICLES,
    payload: { articles },
  };
}

export function fetchedArticle(article) {
  return {
    type: FETCHED_ARTICLE,
    payload: { article },
  };
}
