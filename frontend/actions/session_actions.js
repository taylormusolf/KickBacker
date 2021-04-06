import * as SessionApiUtils from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});



export const login = (user) => dispatch => (
  SessionApiUtils.login(user)
  .then((user) => (dispatch(receiveCurrentUser(user))),
  err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionApiUtils.logout()
  .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
  SessionApiUtils.signup(user)
  .then((user) => (dispatch(receiveCurrentUser(user))
  ), error => (dispatch(receiveErrors(error.responseJSON))
  ))
);