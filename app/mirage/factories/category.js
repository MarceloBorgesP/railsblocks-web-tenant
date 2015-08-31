import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function() {
    return faker.name.firstName();
  },
  description: "High Performance Server in a Class A Datacenter",
  icon: "fa-cloud",
  enabled: true
});
