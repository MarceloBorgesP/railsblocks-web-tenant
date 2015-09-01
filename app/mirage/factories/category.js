import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function generateCategoryName(i) {
    return "Category " + (i+1);
  },
  description: "Description",
  icon: "fa-cloud",
  enabled: true
});
