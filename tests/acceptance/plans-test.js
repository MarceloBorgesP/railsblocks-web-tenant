import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'railsblocks-web-tenant/tests/helpers/start-app';

module('Acceptance | plans', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('admin listing plans of the catalog', function(assert) {
  server.createList('cloud_server', 3);

  andThen(function() {
    visit('/admin/catalog/softlayer/plans/cloud_servers');
  });
  andThen(function() {
    assert.equal(find('.plans .s-element-item').length, 3);
  });
});

test('admin create a new plan', function(assert) {
  
  andThen(function() {
    visit('/admin/catalog/softlayer/plans/cloud_servers');
    click("a:contains('New plan')");
    fillIn('input#name', 'Plan Name');
    select('#cpu-select', '1 x 2.0 GHz Core');
    select('#memory-select', '2 GB');
    select('#datacenter-select', 'Amsterdam 1');
    select('#os-select', 'CentOS - Latest');
    select('#network-select', '10 Mbps Public & Private Network Uplinks');
    select('#disk1-select', '10 GB');
    select('#disk2-select', '10 GB');
    select('#disk3-select', '10 GB');
    select('#disk4-select', '10 GB');
    select('#disk5-select', '10 GB');
    click('a#save_top');
  });
  andThen(function() {
    assert.equal($.trim($('.plans .s-element-item').text()), 'Plan Name');
  });
});

test('admin edit a plan', function(assert) {
  server.create('cloud_server', {name: 'Small'});

  andThen(function() {
    visit('/admin/catalog/softlayer/plans/cloud_servers');
    click("a:contains('Small')");
    click("button:contains('Edit Name')");
    fillIn('input#name', 'New Plan Name');
    click('button#save_bottom');
  });
  andThen(function() {
    assert.equal($.trim($('.plans .s-element-item').text()), 'New Plan Name');
  });
});

test('admin delete a plan', function(assert) {
  server.create('cloud_server', {name: 'Small'});

  andThen(function() {
    visit('/admin/catalog/softlayer/plans/cloud_servers');
    click("a:contains('Small')");
    click("a:contains('Delete Plan')");
  });
  andThen(function() {
    assert.equal($.trim($('.plans .s-element-item span').text()), 'No plans yet!');
  });
});