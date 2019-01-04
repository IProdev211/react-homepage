
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

function deleteMember(member_id) {
  return request({
    url: '/deleteMember',
    method: 'POST',
    data: {
      member_id: member_id
    }
  });
}

function getAddableMembers(room_id) {
  return request({
    url: '/getAddableMembers',
    method: 'POST',
    data: {
      room_id: room_id
    }
  });
}

function addMember(room_id, member_id) {
  return request({
    url: '/addMember',
    method: 'POST',
    data: {
      room_id: room_id,
      member_id: member_id
    }
  });
}

function deleteRoom(room_id) {
  return request({
    url: '/deleteRoom',
    method: 'POST',
    data: {
      room_id: room_id
    }
  });
}


function getChatRooms(user_id) {
  return request({
    url: '/getChatRooms',
    method: 'POST',
    data: {
      user_id: user_id
    }
  });
}

function getChatFeeds(room_id) {
  return request({
    url: '/getChatFeeds',
    method: 'POST',
    data: {
      room_id: room_id
    }
  });
}

function newChatMessage(user_id, room_id, message, content = 'Posted new Message') {
  return request({
    url: '/newChatMessage',
    method: 'POST',
    data: {
      user_id: user_id,
      room_id: room_id,
      message: message,
      content: content
    }
  });
}


const apiService = {

  get, login, register, checkToken, getFeeds, newMessage, newRoom, getOwnRooms, deleteMember, addMember, getAddableMembers, deleteRoom,

  getChatRooms, getChatFeeds, newChatMessage

};

export default apiService;
