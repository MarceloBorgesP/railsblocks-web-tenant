import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('group', {icon: 'fa-cloud', enabled: true, category_id: params.category_id});
  },
  actions: {
    save: function() {
      var group = this.currentModel;
      group.save().then(() => {
        this.transitionTo('admin.categories.category.groups', group.category_id);
      });
    },
    selectIcon: function(value){
      var group = this.currentModel;
      group.set('icon', value);
    }
  }
});