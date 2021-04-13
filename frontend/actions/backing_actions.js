import * as APIUtil from '../util/backing_api_util';

export const RECEIVE_BACKINGS = 'RECEIVE_BACKINGS';
export const RECEIVE_BACKING = 'RECEIVE_BACKING';
export const REMOVE_BACKING = 'REMOVE_BACKING';

export const receiveBackings = (backings) => ({
  type: RECEIVE_BACKINGS,
  backings,
});

export const receiveBacking = (backing) => ({
  type: RECEIVE_BACKING,
  backing
});

export const removeBacking = (backingId) => ({
  type: REMOVE_BACKING,
  backingId
});

export const fetchBackings = () => dispatch => (
  APIUtil.fetchBackings()
    .then(backings => (dispatch(receiveBackings(backings))))
);

export const fetchBacking = backingId => dispatch => (
  APIUtil.fetchBacking(backingId)
    .then(backing => (dispatch(receiveBacking(backing))))
);

export const createBacking = backing => dispatch => (
  APIUtil.createBacking(backing)
  .then(backing => (dispatch(receiveBacking(backing))))
);

export const deleteBacking = backingId => dispatch => (
  APIUtil.deleteBacking(backingId).then(() => (
    dispatch(removeBacking(backingId))
  ))
);