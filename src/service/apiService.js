
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

function newRoom(user, newRoom) {
  return request({
    url: '/newRoom',
    method: 'POST',
    data: {
      user:user,
      newRoom:newRoom
    }
  });
}

function getOwnRooms(user) {
  return request({
    url: '/ownRooms',
    method: 'POST',
    data: {
      user:user
    }
  });
}



const apiService = {
  get, login, register, checkToken, getFeeds, newMessage, newRoom, getOwnRooms
};

export default apiService;
