import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function(){
    this.route('catalog', function(){
      this.route('softlayer', function(){
        this.route('plans', function(){
          this.route('cloud_servers');
          this.route('cloud_servers.cloud_server', { path: 'cloud_servers/:cloud_server_id' });
          this.route('cloud_servers.new', { path: 'cloud_servers/new' });
        });
      });
    });
    this.route('categories');
    this.route('categories.new', { path: 'categories/new' });
    this.route('categories.category', { path: 'categories/:category_id' });
    this.route('categories.category.groups', { path: 'categories/:category_id/groups' });
    this.route('categories.category.groups.new', { path: 'categories/:category_id/groups/new' });
    this.route('categories.category.groups.group', { path: 'categories/:category_id/groups/:group_id' });
  });
  this.route('shop.categories', { path: 'shop' });
  this.route('shop.categories.groups', { path: 'shop/category/:category_slug' });
  this.route('shop.categories.groups.plans', { path: 'shop/category/:category_slug/group/:group_slug' });
});

export default Router;
