import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group', 'Unit | Model | group', {
  needs: ['model:category']
});

test('category relationship', function(assert) {
  var group = this.store().modelFor('group');
  var relationship = Ember.get(group, 'relationshipsByName').get('category');

  assert.equal(relationship.key, 'category');
  assert.equal(relationship.kind, 'belongsTo');
});
