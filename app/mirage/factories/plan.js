import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  hourly: true,
  disk: true,
  ram: 0,
  disk1_local: 0,
  disk2_local: 0,
  disk3_local: 0,
  disk4_local: 0,
  disk5_local: 0,
  disk1_san: 0,
  disk2_san: 0
 });
