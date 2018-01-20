export const FETCHED_TEST = 'FETCHED_TEST';

export function fetchedTest(test) {
  return {
    type: FETCHED_TEST,
    payload: { test },
  };
}
