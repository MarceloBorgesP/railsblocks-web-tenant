import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.attr('string'),
  icon: DS.attr('string'),
  unity: DS.attr('number'),
  qty: DS.attr('number'),
  total: DS.attr('number')
});
