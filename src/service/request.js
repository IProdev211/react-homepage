
import axios from 'axios';

import {config} from '../Config';

import {session} from './Session';

//TODO: replace localhost with something cool
const client = axios.create({
  baseURL: config.apiServer.baseUrl,
});


const request = function(options) {

  // Add jwt token to header or remove it on each request
  const token = session.get('token');
  if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  else axios.defaults.headers.common['Authorization'] = '';


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