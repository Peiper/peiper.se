export const FETCHED_NOW = 'FETCHED_NOW';

export function fetchedNow(value) {
  return {
    type: FETCHED_NOW,
    payload: { value },
  };
}
