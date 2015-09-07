import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      category: this.store.find('category', params.category_id),
      groups: this.store.query('group', { category_id: params.category_id})
    });
  },
  setupController: function(controller, model) {
    if(!model.category){
      model.category = model;
      model.groups = this.store.query('group', { category_id: model.category.get('id')});
    }
    controller.setProperties(model);
  }
});
