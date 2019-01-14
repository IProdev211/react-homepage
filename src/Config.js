

class Config {

//  ipAddress= '10.4.51.222';
  ipAddress= 'localhost';

  port= 5000;

  apiServer = {
    baseUrl: 'http://' + this.ipAddress + ':' + this.port + '/api',
    socketUrl: 'ws://' + this.ipAddress + ':' + this.port + '/api/socks/',
  }
}

export let config = new Config();

