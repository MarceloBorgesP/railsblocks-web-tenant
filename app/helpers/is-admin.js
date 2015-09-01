import Ember from 'ember';

export function isAdmin() {
  return window.location.pathname.match("admin");
}

export default Ember.Helper.helper(isAdmin);
