export const FETCHED_SITE_BUILDS = 'FETCHED_SITE_BUILDS';
export const FETCHED_API_BUILDS = 'FETCHED_API_BUILDS';

export function fetchedSiteBuilds(value) {
  return {
    type: FETCHED_SITE_BUILDS,
    payload: { value },
  };
}

export function fetchedApiBuilds(value) {
  return {
    type: FETCHED_API_BUILDS,
    payload: { value },
  };
}
