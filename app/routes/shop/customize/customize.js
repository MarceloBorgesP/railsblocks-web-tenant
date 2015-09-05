import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('customize', params.category_id);
  },
  actions: {
    save: function() {
      var category = this.currentModel;
      category.save().then(() => {
        this.transitionTo('shop.shop');
      });
    }
  }
});
