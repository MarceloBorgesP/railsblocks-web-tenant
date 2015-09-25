import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  domain: DS.attr('string'),
  datacenter: DS.attr('string'),
  processor: DS.attr('string'),
  redhat: DS.attr('string'),
  debian: DS.attr('string'),  
  windows: DS.attr('string'),
  centos: DS.attr('string'),
  vyatta: DS.attr('string'), 
  ubuntu: DS.attr('string'),
  cloud_linux: DS.attr('string'),
  ram: DS.attr('string'),
  disk: DS.attr('boolean'),
  hourly: DS.attr('boolean'), 
  link_speed: DS.attr('string'),
  disk1_local: DS.attr('number'),
  disk2_local: DS.attr('number'),
  disk3_local: DS.attr('number'),
  disk4_local: DS.attr('number'),
  disk5_local: DS.attr('number'),
  disk1_san: DS.attr('number'),
  disk2_san: DS.attr('number'),
  total: DS.attr('number')
});
