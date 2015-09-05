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
  disc: DS.attr('boolean'),
  hourly: DS.attr('boolean'), 
  link_speed: DS.attr('string'),
  disc1_local: DS.attr('number'),
  disc2_local: DS.attr('number'),
  disc3_local: DS.attr('number'),
  disc4_local: DS.attr('number'),
  disc5_local: DS.attr('number'),
  disc1_san: DS.attr('number'),
  disc2_san: DS.attr('number')
});
