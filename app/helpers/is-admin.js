import Ember from 'ember';

export function isAdmin() {
  return window.location.pathname.includes('admin');
}

export default Ember.Helper.helper(isAdmin);
