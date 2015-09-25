import Ember from 'ember';
import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: 'http://localhost:4200',
  namespace: 'api',
  pathForType: function(modelName) {
    return Ember.String.underscore(Ember.String.pluralize(modelName));
  }
});