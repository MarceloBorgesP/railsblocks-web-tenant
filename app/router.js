import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function(){
    this.route('categories');
    this.route('categories.category', { path: 'categories/:category_id' });
    this.route('categories.new', { path: 'categories/new' });
  });
  this.route('shop.categories', { path: 'shop' });
});

export default Router;
