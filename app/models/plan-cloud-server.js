import DS from 'ember-data';

export default DS.Model.extend({
name: DS.attr('string'),
processor: DS.attr('string'),
memory: DS.attr('string'),
disk_san: DS.attr('boolean'),
disk_1: DS.attr('string'),
datacenter: DS.attr('string'),
value: DS.attr('number'),
operating: DS.attr('string'),
category: DS.belongsTo('category', {async:true}),
group: DS.belongsTo('group', {async:true})
});
