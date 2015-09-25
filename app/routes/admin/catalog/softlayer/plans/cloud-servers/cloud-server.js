import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('plans/cloud-server', params.cloud_server_id);
  },
  actions: {
    delete: function() {
      var plan = this.currentModel;
      plan.deleteRecord();
      plan.save().then(() => {
        this.transitionTo('admin.catalog.softlayer.plans.cloud_servers');
      });
    },
    save: function() {
      var plan = this.currentModel;
      plan.save().then(() => {
        this.transitionTo('admin.catalog.softlayer.plans.cloud_servers');
      });
    }
  }
});
