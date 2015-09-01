import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.category_id);
  },
  actions: {
    delete: function() {
      var category = this.currentModel;
      category.deleteRecord();
      category.save().then(() => {
        this.transitionTo('admin.categories');
      });
    },
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
