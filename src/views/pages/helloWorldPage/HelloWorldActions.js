export const FETCHED_BEAMZ = 'FETCHED_BEAMZ';

export function fetchedBeamz(beamz) {
  return {
    type: FETCHED_BEAMZ,
    payload: { beamz },
  };
}
