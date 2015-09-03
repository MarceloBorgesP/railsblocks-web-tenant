import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('category', 'Unit | Model | category', {
  needs: ['model:group']
});

test('group relationship', function(assert) {
  var category = this.store().modelFor('category');
  var relationship = Ember.get(category, 'relationshipsByName').get('groups');

  assert.equal(relationship.key, 'groups');
  assert.equal(relationship.kind, 'hasMany');
});
