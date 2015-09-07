import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function(){
    this.route('categories');
    this.route('categories.new', { path: 'categories/new' });
    this.route('categories.category', { path: 'categories/:category_id' });
    this.route('categories.category.groups', { path: 'categories/:category_id/groups' });
    this.route('categories.category.groups.new', { path: 'categories/:category_id/groups/new' });
    this.route('categories.category.groups.group', { path: 'categories/:category_id/groups/:group_id' });
  });
  this.route('shop.categories', { path: 'shop' });
  this.route('shop.customize', { path: 'shop/customize' });
  this.route('shop.categories.groups', { path: 'shop/category/:category_slug' });

});

export default Router;
