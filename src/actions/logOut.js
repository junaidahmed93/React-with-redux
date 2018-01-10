import request from 'superagent';
import constants from '../Constants';

export function requestLogOutUser () {
  const action = {
    type: constants.LOGOUT_USER,
  }
  return action;
}
export function logOutSuccess () {
  const action = {
    type: constants.LOGOUT_SUCCESS,
  }
  return action;
}
export function logOutFail (error) {
  const action = {
    type: constants.LOGOUT_FAIL,
    error
  }
  return action;
}

export function logOutUser() {

  return dispatch => {
    dispatch(requestLogOutUser());
    return requestLogOutSource()
    .then(() => {
      localStorage.setItem('GhooksUser', '');
      return dispatch(logOutSuccess());
    })
    .catch((error) => {
      return dispatch(logOutFail(error));
    });
  };
}
const requestLogOutSource = () => {
  const user = JSON.parse(localStorage.getItem('GhooksUser'));
  const url = constants.LOGOUT_URL.replace('{token}', user.token);
  return new Promise((resolve, reject) => {
    request
    .get(url)
    .accept(constants.APPLICATION_TYPE)
    .set(constants.API_HEADERS)
    .end((err, res) => {
      const response = res.body;
      if(!response.result.isError && !response.responseBody) {
        resolve(response.result.message)
      } else {
        reject(response.result.message)
      }
    });
  });
}
