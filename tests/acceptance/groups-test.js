import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'railsblocks-web-tenant/tests/helpers/start-app';

module('Acceptance | groups', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('admin listing groups of the category', function(assert) {
  var category = server.create('category', { name: 'Server'});
  server.createList('group', 3, { category_id: category.id });

  andThen(function() {
    visit('/admin/categories');
    click("a:contains('Server')");
    click("a:contains('Groups')");
  });
  andThen(function() {
    assert.equal(find('.groups .s-element-item').length, 3);
  });
});

test('admin create a new group', function(assert) {
  server.create('category', { name: 'Server'});
  
  andThen(function() {
    visit('/admin/categories');
    click("a:contains('Server')");
    click("a:contains('New Group')");
    fillIn('input#name', 'Group Name');
    fillIn('input#desc', 'Description');
    select('#icon-select', 'fa-file-text-o');
    fillIn('input#slug', 'group_slug');
    click('a#save_top');
  });
  andThen(function() {
    assert.equal($.trim($('.groups .s-element-item').text()), 'Group Name');
  });
});

test('admin edit a group', function(assert) {
  var category = server.create('category', { name: 'Server'});
  server.create('group', {name: 'Virtual', category_id: category.id});

  andThen(function() {
    visit('/admin/categories');
    click("a:contains('Server')");
    click("a:contains('Groups')");
    click("a:contains('Virtual')");
    click("button:contains('Edit Name')");
    fillIn('input#name', 'New Group Name');
    click('button#save_bottom');
  });
  andThen(function() {
    assert.equal($.trim($('.groups .s-element-item').text()), 'New Group Name');
  });
});

test('admin delete a group', function(assert) {
  var category = server.create('category', { name: 'Server'});
  server.create('group', {name: 'Virtual', category_id: category.id});

  andThen(function() {
    visit('/admin/categories');
    click("a:contains('Server')");
    click("a:contains('Groups')");
    click("a:contains('Virtual')");
    click("a:contains('Delete Group')");
  });
  andThen(function() {
    assert.equal($.trim($('.groups .s-element-item span').text()), 'No groups yet!');
  });
});