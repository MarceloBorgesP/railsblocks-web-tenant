import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'railsblocks-web-tenant/tests/helpers/start-app';

module('Acceptance | categories', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /admin/categories', function(assert) {
  server.createList('category', 3);
  visit('/admin/categories');

  andThen(function() {
    assert.equal(currentURL(), '/admin/categories');
  });
  andThen(function() {
    assert.equal(find('.categories .s-element-item').length, 3);
  });
});

test('create a new category', function(assert) {
  andThen(function() {
    visit('/admin/categories/new');
    fillIn('input#name', 'Category Name');
    fillIn('input#desc', 'Description');
    select('#icon-select', 'fa-file-text-o');
    click('a#save_top');
  });
  andThen(function() {
    assert.equal($.trim($('.categories .s-element-item').text()), 'Category Name');
  });
});

test('edit a category', function(assert) {
  server.create('category');
  andThen(function() {
    visit('/admin/categories/1');
    click("button:contains('Edit Name')");
    fillIn('input#name', 'New Category Name');
    click('button#save_bottom');
  });
  andThen(function() {
    assert.equal($.trim($('.categories .s-element-item').text()), 'New Category Name');
  });
});

test('delete a category', function(assert) {
  server.create('category');
  andThen(function() {
    visit('/admin/categories/1');
    click("a:contains('Delete Category')");
  });
  andThen(function() {
    assert.equal($.trim($('.categories .s-element-item span').text()), 'No categories yet!');
  });
});