import constants from '../Constants';
let user = {};
let error = '';
const loginReducer = (state = {}, action) => {
  switch(action.type) {
    case constants.LOGIN:
      user = action.user;
      return {...state, error, user};
    case constants.LOGIN_FAIL:
      error = action.error;
      return {...state, error, user};
    case constants.USER_STORAGE:
      user = action.user;
      return {...state, error, user};
    case constants.LOGOUT_SUCCESS:
      user = {};
      error = '';
      return { error, user };
    default:
      return {...state, error, user};
  }
}
export default loginReducer;
