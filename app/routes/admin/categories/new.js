import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('category', {icon: 'fa-cloud', enabled: true});
  },
  actions: {
    save: function() {
      var category = this.currentModel;
      category.save().then(() => {
        this.transitionTo('admin.categories');
      });
    },
    selectIcon: function(value){
      var category = this.currentModel;
      category.set('icon', value);
    }
  }
});