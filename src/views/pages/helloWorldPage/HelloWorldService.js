import { fetchedBeamz } from './HelloWorldActions';

let baseApiUrl = 'https://';
if (process.env.NODE_ENV === 'production') {
  baseApiUrl += 'labs.beamonpeople.se/web3punkt0-api';
} else {
  baseApiUrl += 'localhost:8888';
}
const beam = beamInput => (
  {
    id: beamInput.Id,
    name: beamInput.FirstName,
    lastname: beamInput.LastName,
    group: beamInput.Group,
  }
);

const beamzModel = (beamz) => {
  if (!Array.isArray(beamz)) {
    throw new Error('Beamz is not an array!!! :(');
  }
  return beamz.map(beam);
};

export default function getBeamz() {
  return dispatch => fetch(`${baseApiUrl}/people`)
    .then((res) => {
      if (res.status >= 400) {
        console.warn('Request failed');
      }
      return res;
    })
    .then(res => res.json())
    .then(res => beamzModel(res))
    .then(result => dispatch(fetchedBeamz(result)));
}
