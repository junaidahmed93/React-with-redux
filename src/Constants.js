const BASE_URL = '';
export default {
  // api headers
  APPLICATION_TYPE: 'application/json',
  API_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  // login
  LOGIN_URL: `${BASE_URL}/login`,

  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',

  // logOut
  LOGOUT_URL: `${BASE_URL}/logout?api_token={token}`,

  LOGOUT_USER: 'LOGOUT_USER',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'LOGOUT_FAIL',
}
