const USER_TYPE = {
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER',
};

const CookieKey = {
  accessToken: 'accessToken',
  currentRoles: 'CurrentRoles',
  previousUrl: 'previousUrl',
  networkError: 'networkError',
};

const RouterPath = {
  Home: '/',
  Register: '/dang-ky',
  PageNotFound: '/404',
  Login: '/dang-nhap',
  Admin: '/admin'
};

export { USER_TYPE, CookieKey, RouterPath };
