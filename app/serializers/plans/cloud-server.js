import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  modelNameFromPayloadKey: function(payloadKey) {
    if (payloadKey.match('cloud_server')) {
      return this._super('plans/' + payloadKey);
    } else {
     return this._super(payloadKey);
    }
  }
});