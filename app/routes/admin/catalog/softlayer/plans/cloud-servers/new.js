import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('plans/cloud-server', {enabled: true, disk_san: true, hourly: false});
  },
  actions: {
    save: function() {
      var plan = this.currentModel;
      plan.save().then(() => {
        this.transitionTo('admin.catalog.softlayer.plans.cloud_servers');
      });
    }
  }
});