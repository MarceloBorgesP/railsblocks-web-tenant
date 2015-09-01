import { moduleForModel, test } from 'ember-qunit';

moduleForModel('category', 'Unit | Model | category', {
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
