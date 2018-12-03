
import {session} from './Session';

import apiService from './apiService';

// Check Token on first start

if (session.get('token'))
  apiService.checkToken(session.get('token')).then(result => {
    console.log(result);
  });




const auth = {

  isChecked: false,

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

  },



};

export default auth;