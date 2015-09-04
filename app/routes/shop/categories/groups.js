import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('group', {category_id: params.category_slug});
  }
});
