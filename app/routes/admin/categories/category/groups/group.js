import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      category: this.store.find('category', params.category_id),
      group: this.store.find('group', params.group_id)
    });
  },
  setupController: function(controller, model) {
    if(!model.category){
      model.category = model;
      model.group = this.store.find('group', model.category.get('id'));
    }
    controller.setProperties(model);
  },
  actions: {
    delete: function() {
      var group = this.currentModel.group;
      var category = this.currentModel.category;
      group.deleteRecord();
      group.save().then(() => {
        this.transitionTo('admin.categories.category.groups', category.id);
      });
    },
    save: function() {
      var group = this.currentModel.group;
      var category = this.currentModel.category;
      group.save().then(() => {
        this.transitionTo('admin.categories.category.groups', category.id);
      });
    },
    selectIcon: function(value){
      var group = this.currentModel.group;
      group.set('icon', value);
    }
  }
});
