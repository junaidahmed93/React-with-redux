import constants from '../Constants';

export function getUserFromStorage () {
  const user = JSON.parse(localStorage.getItem('GhooksUser'));
  const action = {
    type: constants.USER_STORAGE,
    user
  }
  return action;
}
