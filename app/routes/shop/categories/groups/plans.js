import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('plan-cloud-server', {
      category_id: params.category_slug, 
      group_id: params.group_slug
    });
  }
});