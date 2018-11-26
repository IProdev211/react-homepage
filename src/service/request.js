
import axios from 'axios';

import {session} from './Session';

const client = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Add jwt token to header
const token = session.get('token');
if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;


const request = function(options) {

  const onSuccess = function(response) {
    console.debug('Request successful', response);

    //return Promise.resolve(response.data);
    return response.data;

  };

  const onError = function(error) {
    console.error('Request failed', error.config);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);

  };

  return client(options).then(onSuccess).catch(onError);

};

export default request;