
import {session} from './Session';

const auth = {

  isAuthenticated: false,
  user: null,

  authenticate(user, token, callback) {
    this.isAuthenticated = true;
    this.user = user;

    session.set('token', token);

    if (callback) callback();

  },

  signout(callback) {
    this.isAuthenticated = false;
    this.user = null;

    session.remove('token');

    if (callback) callback();

  },


};

export default auth;