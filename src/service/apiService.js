
import request from './request';

function get(url) {
  return request({
    url: url,
    method: 'GET'
  });
}

function login(user) {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      user:user
    }
  });
}

function register(user) {
  return request({
    url: '/register',
    method: 'POST',
    data: {
      user:user
    }
  });
}



const apiService = {
  get, login, register
};

export default apiService;
