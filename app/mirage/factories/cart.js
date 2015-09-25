import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  product: 'Cloud Server',
  icon: 'fa fa-cloud',
  unity: 250,
  qty: 2,
  total: 500
 });
