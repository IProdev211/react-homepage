
import {session} from './Session';


const auth = {

  isAuthenticated: false,

  authenticate(user, token, callback) {
    this.isAuthenticated = true;

    session.set('user', user);
    session.set('token', token);

    callback();

  },

  signout(callback) {
    this.isAuthenticated = false;

    session.remove('user');
    session.remove('token');

    callback();

  }

};

export default auth;