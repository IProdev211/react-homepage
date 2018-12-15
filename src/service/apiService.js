
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

function checkToken() {
  return request({
    url: '/checkToken',
    method: 'POST'
  });
}

function getFeeds() {
  return request({
    url: '/feeds',
    method: 'POST'
  });
}

function newMessage(user, message) {
  return request({
    url: '/newMessage',
    method: 'POST',
    data: {
      user:user,
      message:message
    }
  });
}



const apiService = {
  get, login, register, checkToken, getFeeds, newMessage
};

export default apiService;
