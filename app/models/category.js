import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  icon: DS.attr('string'),
  enabled: DS.attr('boolean'),
  groups: DS.hasMany('group', {async:true})
});
