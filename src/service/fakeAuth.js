
const fakeAuth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 2000);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 2000);
  }
};

export default fakeAuth;