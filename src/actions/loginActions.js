import constants from '../Constants';

export function requestLogInUser () {
  const action = {
    type: constants.LOGIN,
  }
  return action;
}
export function loginSuccess (user) {
  const action = {
    type: constants.LOGIN_SUCCESS,
    user
  }
  return action;
}
export function loginFail (error) {
  const action = {
    type: constants.LOGIN_FAIL,
    error
  }
  return action;
}

export function logInUser(user) {

  return dispatch => {
    dispatch(requestLogInUser());
    // return requestLoginSource(user)
    // .then((response) => {
    //   const normalizedUser = normalizeUser(response);
    //   localStorage.setItem('GhooksUser', JSON.stringify(normalizedUser));
    //   return dispatch(loginSuccess(normalizedUser));
    // })
    // .catch((error) => {
    //   return dispatch(loginFail(error));
    // });
  };
}

// const requestLoginSource = (user) => {
//   const payload = {email: user.email.toString(), password: user.password.toString()};
//   return new Promise((resolve, reject) => {
//     request
//     .post(constants.LOGIN_URL)
//     .send(JSON.stringify(payload))
//     .accept(constants.APPLICATION_TYPE)
//     .set(constants.API_HEADERS)
//     .end((err, res) => {
//       const response = res.body;
//       if(!response.result.isError && response.responseBody) {
//         resolve(response.responseBody)
//       } else {
//         reject(response.result.message)
//       }
//     });
//   });
// }

// const normalizeUser = (user) => {
//   return {
//     userId: user.id || '',
//     isAdmin: !user.administratorId,
//     administratorId: user.administratorId,
//     token: user.apiToken || '',
//     email: user.email || '',
//     firstName: user.firstName || '',
//     lastName: user.lastName || '',
//   }
// }
